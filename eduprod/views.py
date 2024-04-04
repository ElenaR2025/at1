from django.core import serializers
from django.shortcuts import render
from .models import Question
from django.contrib.auth.decorators import login_required
import random

# View function for the Revision page
def Revision(request):
    return render(request, 'eduprod/Revision.html')

# View function for the Home page, requires login
@login_required
def Home(request):
    return render(request, 'eduprod/Home.html')

# View function for the Dashboard page
def dashboard(request):
    return render(request, 'users/dashboard.html')

# View function for the Content page
def content(request):
    return render(request, 'eduprod/content.html')

# View function for the Login page
def login(request):
    return render(request, 'users/login.html')

# View function for displaying quiz questions
def quiz_view(request):
    questions = Question.objects.all()  # Retrieve all questions from the database
    context = {
        'questions': questions,  # Pass the questions to the template context
    }
    return render(request, 'eduprod/Revision.html', context)  # Render the Revision template with context

# View function for displaying a random question for revision
def revision_view(request):
    questions = (Question.objects.all())  # Retrieve all questions from the database
    random_question = random.choice(questions) if questions else None  # Choose a random question if available
    return render(request, 'edupod/Revision.html', {'question': random_question})  # Render the Revision template with the random question

# View function for a custom view
def my_view(request):
    return render(request, 'content.html')

# View function for the Quiz page
def Quiz(request):
    return render(request, 'eduprod/Quiz.html')

# View function for the Layout template
def layout(request):
    return render(request, 'eduprod/layout.html')

# View function for the Index page
def index(request):
    return render(request, 'eduprod/index.html')
