from django.core import serializers
from django.shortcuts import render
from .models import Question
from django.contrib.auth.decorators import login_required

def content(request):
    return render(request, 'eduprod/content.html')

def Revision(request):
    return render(request, 'eduprod/Revision.html')

@login_required
def index(request):
    questions = Question.objects.all()
    questions_json = serializers.serialize('json', questions)
    return render(request, 'eduprod/index.html', {'questions_json': questions_json})

def Test2(request):
    return render(request, 'eduprod/Test2.html')

def dashboard(request):
    return render(request, 'users/dashboard.html')

def dropdown(request):
    return render(request, 'content')



