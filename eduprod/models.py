from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _

class Question(models.Model):
    text = models.CharField(max_length=200)
    answer = models.TextField()

    def __str__(self):
        return self.text
    