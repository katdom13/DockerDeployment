from __future__ import absolute_import, unicode_literals

import os

from celery import Celery

# Set default settings
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')

# Set app
app = Celery('core')

app.config_from_object('django.conf:settings', namespace='CELERY')

app.autodiscover_tasks()
