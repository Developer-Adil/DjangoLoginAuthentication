from django.shortcuts import render,HttpResponse,redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages

@login_required(login_url="login")
def HomePage(request):
    return render (request,'home.html')
    

def SignUp(request):
    if request.method=='POST':
        uname=request.POST.get('username')
        name=request.POST.get('name')
        email=request.POST.get('email')
        pass1=request.POST.get('password1')
        pass2=request.POST.get('password2')
        
        if User.objects.filter(username=uname).exists():           
            messages.error(request, "Username already exist.")
            return render(request, 'login.html')

        
        if pass1!=pass2:
            messages.error(request, "Invalid Password.")
            
        
        else:
            my_user=User.objects.create_user(uname,email,pass1)
            my_user.save()
            messages.success(request, "Account created successfully!")
            return redirect('signup')
            
       
    return render (request,'login.html')


def LoginPage(request):
    if request.method=='POST':
        username=request.POST.get('username')
        pass1=request.POST.get('pass')
        
        user=authenticate(request,username=username,password=pass1)
        if user is not None:
            login(request,user)
            return redirect('home')
        
        else:
            messages.error(request, "Username or Passwords are incorrect")   
    return render (request,'signup.html')


def LogoutPage(request):
    logout(request)
    return redirect('signup')

