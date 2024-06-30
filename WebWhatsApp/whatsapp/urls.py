from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import WhatsAppRecieveAPI, WhatsAppSendAPI, Upload
from .user import RegisterView, LogoutAPIView, SetNewPasswordAPIView, VerifyEmail, LoginAPIView, PasswordTokenCheckAPI, RequestPasswordResetEmail, RetriveSessionUser
from rest_framework_simplejwt.views import TokenRefreshView

routers = DefaultRouter()
routers.register('messages', WhatsAppSendAPI, basename='messages')
routers.register('', Upload, basename='upload')

urlpatterns = [
    path('webhook', WhatsAppRecieveAPI.as_view(), name='webhook'),
    path('', include(routers.urls)),
    path('register/', RegisterView.as_view(), name="register"),
    path('login/', LoginAPIView.as_view(), name="login"),
    path('session-user/', RetriveSessionUser.as_view(), name="session-user"),
    path('logout/', LogoutAPIView.as_view(), name="logout"),
    path('email-verify/', VerifyEmail.as_view(), name="email-verify"),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('request-reset-email/', RequestPasswordResetEmail.as_view(),
         name="request-reset-email"),
    path('password-reset/<uidb64>/<token>/',
         PasswordTokenCheckAPI.as_view(), name='password-reset-confirm'),
    path('password-reset-complete', SetNewPasswordAPIView.as_view(),
         name='password-reset-complete')
]
