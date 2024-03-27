from django.core import serializers
from django.shortcuts import render
from .models import Question
from django.contrib.auth.decorators import login_required
import random



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