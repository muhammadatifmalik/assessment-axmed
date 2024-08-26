from rest_framework import viewsets
from .models import MedicationSKU
from .serializers import MedicationSKUSerializer

class MedicationSKUViewSet(viewsets.ModelViewSet):
    queryset = MedicationSKU.objects.all()
    serializer_class = MedicationSKUSerializer
