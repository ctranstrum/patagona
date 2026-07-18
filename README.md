# Patagona keyboards

## Patagona hummingbird

The Patagona genus is the largest hummingbird in the world.
The genus includes two species:
the migratory giant hummingbird (P. gigas)
and the sedentary giant hummingbird (P. chaski),
the latter being slightly larger than the former.

Compared to other hummingbirds,
the weight of the giant hummingbird
is almost twice that of any hummingbird outside the Patagona genus,
and ten times that of the bee hummingbird.

Patagona gigas embarks on an annual migration
of over 4000 km each way,
during which it ascends over 4000 meters,
from the Chilean coast to the Peruvian Andes,
giving it the broadest climactic niche of any hummingbird.

## Original hummingbird keyboard

The original [hummingbird keyboard][pje66] used a [XIAO SAMD21][samd21]
and was limited to 30 keys because of the 5x6 matrix allowed
by the 11 accessible GPIO pins on that microcontroller.

The Patagona keyboards use the [XIAO BLE][ble],
which has two NFC pads that can be repurposed,
providing for a total of 13 GPIO pins when added to the standard 11.
That allows for a 6x7 matrix, or up to 42 keys.

## Patagona gigas

![completed Patagona gigas build](images/gigas/complete.jpg)

[Build guide](BUILD-gigas.md)

## Patagona chaski

![completed Patagona chaski build](images/chaski/complete.jpg)

[Build guide](BUILD-chaski.md)

[pje66]: https://github.com/PJE66/hummingbird
[samd21]: https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html
[ble]: https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html
