from django.conf import settings
from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings

# Create your views here.
def contact(request):
    if request.method == "POST":
        message_name = request.POST['message-name']
        message_email = request.POST['message-email']
        message = request.POST['message']

        # Send a email
        send_mail(
            message_name,
            message,
            message_email,
            ['rrahul772k@gmail.com'],
        )

        return render(request, 'cont/contact.html',{'message_name':message_name})
    else:
        return render(request, 'cont/contact.html')
