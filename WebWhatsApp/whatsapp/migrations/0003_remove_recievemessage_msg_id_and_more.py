# Generated by Django 4.1.7 on 2023-03-24 05:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('whatsapp', '0002_recievemessage_sendmessage_whatsappmessages_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='recievemessage',
            name='msg_id',
        ),
        migrations.RemoveField(
            model_name='sendmessage',
            name='msg_id',
        ),
    ]
