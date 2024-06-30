from django.shortcuts import render
# from django.contrib.auth.models import User
from .models import User
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status, viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action, permission_classes
from django.http.response import HttpResponse
from django.conf import settings
import json
import requests
from datetime import datetime
from .models import UserData
from .token_decode import decode_access_token

responseData=""
class WhatsAppRecieveAPI(APIView):
    def get(self, request):
        # url ="https://48b1-116-72-18-108.ngrok.io/whatsapp/webhook"
        token = "02883edc-acc5-460e-bf51-95b5980e81e8"
        mode = request.GET.get('hub.mode')
        challenge = request.GET.get('hub.challenge')
        verify_token = request.GET.get('hub.verify_token')
        if mode == "subscribe" and token == verify_token:
            return HttpResponse(challenge)
        else:
            return Response({"msg": "something went wrong!"}, status=status.HTTP_400_BAD_REQUEST)

    def post(self, request):
        data = json.loads(request.body)
        global responseData
        responseData = data
        print('data: ', data)
        if 'object' in data and 'entry' in data:
            if data['object'] == "whatsapp_business_account":
                try:
                    for entry in data['entry']:
                        PhoneNumber = entry['changes'][0]['value']['metadata']['display_phone_number']
                        PhoneNumberID = entry['changes'][0]['value']['metadata']['phone_number_id']
                        ProfileName = entry['changes'][0]['value']['contacts'][0]['profile']['name']
                except:
                    pass
        return Response(data)



class WhatsAppSendAPI(viewsets.ViewSet):
    Version = settings.VERSION
    PhoneNumberID = settings.PHONE_NUMBER_ID
    access_token = settings.ACCESS_TOKEN
    RecipientPhoneNumber = settings.RECIPIENT_PHONE_NUMBER
    response_data = None
    # permission_classes = [IsAuthenticated]
    
    @permission_classes([IsAuthenticated])
    @action(methods=['post'], detail=False)
    def send_text_message(self, request):
        global responseData
        # serializer_class = UserSendMessageSerializer
        try:
            url = f"https://graph.facebook.com/{self.Version}/{self.PhoneNumberID}/messages"
            type = "text"
            payload = {
                "messaging_product": "whatsapp",
                "to": f"{self.RecipientPhoneNumber}",
                "type": f"{type}",
                "text": {
                    "body": "Hello, How are you?"
                }
            }
            headers = {"Authorization": f"Bearer {self.access_token}",
                       "Content-Type": "application/json"}
            response = requests.post(url, json.dumps(payload), headers=headers)
            response = response.json()
            print('response: ', response)
            token = request.COOKIES['access']  
            user_id = decode_access_token(token)
            user = User.objects.filter(id=user_id).first().__dict__
            reciever_number = self.RecipientPhoneNumber
            messages = []
            whatsapp_id = response['contacts'][0]['wa_id']
            message_id = response['messages'][0]['id']
            message = {"date&time":str(datetime.now()),"message_type":payload["type"], "message":payload["text"]["body"], "message_id" : message_id}
            messages.append(message)

            
            # data = {
            #     'user' : user,
            #     'sendMessage': {
            #          'RecieverNumber': reciever_number,
            #         'messages':messages,
            #         'wa_id':whatsapp_id
            #     }
            # }
            # user_send_serializer  = serializer_class(data = data)  
            # print('user_send_serializer.is_valid(): ============', user_send_serializer.is_valid())
            # if user_send_serializer.is_valid():
            #     user_send_serializer.save()
            #     print('send_serializer: =====================1111111', user_send_serializer.data)
            # else:
            #     print('send_serializer: =====================1111111111111111111111122222222222')
            #     return Response(user_send_serializer.errors, status = status.HTTP_400_BAD_REQUEST)
            return Response(response)
        except Exception as e:
            return Response(str(e), status=status.HTTP_404_NOT_FOUND)

    @action(methods=['post'], detail=False)
    def send_reply_text_message(self, request):
        try:
            url = f"https://graph.facebook.com/{self.Version}/{self.PhoneNumberID}/messages"
            payload = {
                "messaging_product": "whatsapp",
                "recipient_type": "individual",
                "to": f"{self.RecipientPhoneNumber}",
                "context": {
                    "message_id": "<MSGID_OF_PREV_MSG>"
                },
                "type": "text",
                "text": {
                    "preview_url": False,
                    "body": "<TEXT_MSG_CONTENT>"
                }
            }
            headers = {"Authorization": f"Bearer {self.access_token}",
                       "Content-Type": "application/json"}
            response = requests.post(url, json.dumps(payload), headers=headers)
            response = response.text
            return Response(response)
        except Exception as e:
            return Response(str(e), status=status.HTTP_404_NOT_FOUND)

    @action(methods=['post'], detail=False)
    def send_image_message(self, request):
        try:
            url = f"https://graph.facebook.com/{self.Version}/{self.PhoneNumberID}/messages"
            payload = {
                "messaging_product": "whatsapp",
                "to": f"{self.RecipientPhoneNumber}",
                "type": "text",
                "text": {
                    "body": "Hello, How are you?"
                }
            }
            headers = {"Authorization": f"Bearer {self.access_token}",
                       "Content-Type": "application/json"}
            response = requests.post(url, json.dumps(payload), headers=headers)
            response = response.text
            return Response(response)
        except Exception as e:
            return Response(str(e), status=status.HTTP_404_NOT_FOUND)


class Upload(viewsets.ViewSet):
    @action(methods=['post'], detail=False)
    def upload(self, request):
        print('request: ==============', request.data['media'].name)
        data = request.data['media']
        data.name = "rahul.jpeg"
        print('request: ==============', request.data['media'].name,"------------", data)
        from .serializer import UploadSerializer
        serializer = UploadSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            print("=============================================",UserData.objects.all().first())
            
        else:
            return Response(serializer.errors)
        return Response("hello")
