from django.core import serializers
from django.shortcuts import render
from .models import Question
from django.contrib.auth.decorators import login_required
import random



def Revision(request):
    return render(request, 'eduprod/Revision.html')

@login_required


def Home(request):
    return render(request, 'eduprod/Home.html')

def dashboard(request):
    return render(request, 'users/dashboard.html')

def content(request):
    return render(request, 'eduprod/content.html')

def login(request):
    return render(request, 'users/login.html')

def quiz_view(request):
    questions = Question.objects.all()
    context = {
        'questions': questions,
    }
    return render(request, 'eduprod/Revision.html', context)


def revision_view(request):
    questions = (Question.objects.all())
    random_question = random.choice(questions) if questions else None
    return render(request, 'edupod/Revision.html', {'question': random_question})

def my_view(request):
    return render(request, 'content.html')


def Quiz(request):
    return render(request, 'eduprod/Quiz.html' )

def layout(request):
    return render(request, 'eduprod/layout.html')

def index(request):
    return render(request, 'eduprod/index.html')