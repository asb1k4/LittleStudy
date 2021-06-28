from .models import Student
from django import forms


class RegisterForm(forms.ModelForm):
    name = forms.CharField(
        label='Имя')
    user = forms.CharField(
        label='Логин')
    password = forms.CharField(
        label='Пароль')
    phone = forms.CharField(
        label='Телефон')
    class Meta:
        model = Student
        fields = ['user', 'password', 'name', 'email', 'phone']
        widgets = {'password': forms.PasswordInput()}

    def clean_email(self):
        email = self.cleaned_data.get('email')
        user_qs = Student.objects.filter(email=email)
        if user_qs.exists():
            raise forms.ValidationError('Этот Email уже используется!')
        return email

class LoginForm(forms.Form):
    username = forms.CharField(
        label='Логин',
        max_length=20)
    password = forms.CharField(
        label='Пароль',
        widget=forms.PasswordInput())


class EditProfileForm(forms.ModelForm):
    class Meta:
        model = Student
        fields = ["name", "phone", "email", "password", "image", "stream", "address"]

    name = forms.CharField(
        label='Имя')
    password = forms.CharField(
        label='Пароль')
    phone = forms.CharField(
        label='Телефон')
    address = forms.CharField(
        label='Адрес')
    phone = forms.CharField(
        label='Телефон')