import datetime
from django.contrib.auth.models import User, Group
from rest_framework import serializers
from rostermaker.models import Paddler


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')


# TODO-Brandon: apparently this can be cleaned by using a ModelSerializer class
class PaddlerSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=40)
    paddling_side = serializers.ChoiceField(choices=Paddler.PADDLING_SIDES, default=Paddler.PADDLING_SIDE_BOTH)
    time = serializers.IntegerField(default=0)
    # time = serializers.DateTimeField(default=datetime.time(0))

    def create(self, validated_data):
        """
        Create and return a new `Paddler` instance, given the validated data.
        """
        return Paddler.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `Paddler` instance, given the validated data.
        """
        instance.name = validated_data.get('name', instance.name)
        instance.paddling_side = validated_data.get('paddling_side', instance.paddling_side)
        instance.time = validated_data.get('time', instance.time)
        instance.save()
        return instance