from django.db import models
import datetime

# Create your models here.

class Paddler(models.Model):

    PADDLING_SIDE_RIGHT = "right"
    PADDLING_SIDE_LEFT = "left"
    PADDLING_SIDE_BOTH = "both"

    PADDLING_SIDES = [(PADDLING_SIDE_BOTH, "right"), (PADDLING_SIDE_LEFT, "left"), (PADDLING_SIDE_RIGHT, "both")]

    # note: id not required as it's automatically inserted by Django
    name = models.CharField(unique=True, max_length=40)
    paddling_side = models.CharField(choices=PADDLING_SIDES, blank=False, default=PADDLING_SIDE_BOTH, max_length=10)
    time = models.DateTimeField(default=datetime.time(0))

    class Meta:
        ordering = (['time'])