from rest_framework import serializers
from .models import MedicationSKU

class MedicationSKUSerializer(serializers.ModelSerializer):
    countries = serializers.ListField(
        child=serializers.CharField(max_length=50),
        write_only=True
    )

    class Meta:
        model = MedicationSKU
        fields = '__all__'

    def create(self, validated_data):
        countries_list = validated_data.pop('countries', [])
        validated_data['countries'] = ','.join(countries_list)
        return super().create(validated_data)

    def update(self, instance, validated_data):
        countries_list = validated_data.pop('countries', [])
        validated_data['countries'] = ','.join(countries_list)
        return super().update(instance, validated_data)

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['countries'] = instance.countries.split(',') if instance.countries else []
        return representation