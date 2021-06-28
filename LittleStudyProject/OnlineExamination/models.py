from django.db import models
from django.core.validators import RegexValidator
from django.template.defaultfilters import slugify


def upload_image(instance, filename):
    return "%s/%s" % (instance.user, filename)


class Student(models.Model):
    user = models.CharField(primary_key=True, max_length=20, unique=True)
    name = models.CharField('ФИО', max_length=20)
    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,12}$',
                                 message="Неверно введен телефон!")
    phone = models.CharField('Телефон', validators=[phone_regex], max_length=12)
    email = models.EmailField('EMAIL', )
    password = models.CharField('Пароль', max_length=20)
    slug = models.SlugField(max_length=200)
    image = models.ImageField('Изображение', upload_to=upload_image, null=True, blank=True, height_field='height_field', width_field='width_field')
    height_field = models.IntegerField(default=0, null=True)
    width_field = models.IntegerField(default=0, null=True)
    stream = models.CharField(max_length=50, blank=True)
    address = models.CharField('Адресс', max_length=200, blank=True)

    def __str__(self):
        return str(self.user)


class Exams(models.Model):
    exam_name = models.CharField('Название', max_length=50)
    no_of_ques = models.CharField('Всего вопросов', max_length=20)
    total_marks = models.CharField('Максимальная оценка', max_length=20)
    exam_desc = models.TextField('Описание', )
    test_link = models.TextField('Ссылка на тест', '')
    exam_img = models.ImageField('Изображение', upload_to='images/')
    time_duration = models.DurationField('Время на тестирование', default='00:00:00')
    book_name = models.TextField(verbose_name='Название')
    book_src = models.FileField('PDF файл', upload_to='document/')

    def __str__(self):
        return str(self.exam_name)


class Question(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    exam_name = models.ForeignKey(Exams, on_delete=models.CASCADE)
    marks = models.PositiveIntegerField(default=0)
    question = models.TextField(max_length=500)
    option_one = models.CharField(max_length=100)
    option_two = models.CharField(max_length=100)
    option_three = models.CharField(max_length=100)
    option_four = models.CharField(max_length=100)
    answer = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.question)
