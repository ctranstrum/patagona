# Patagona gigas Build Guide

If this is your first time building a custom keyboard,
you should do two things before attempting this build.

- watch a few [soldering][how-to-solder] [tutorials][soldering101]
- read through a detailed build guide like
  the one for the [splitkb.com Aurora Series][splitkb-build-guide]

The remainder of this build guide will assume a basic familiarity with the process
and will only hit upon specific items that may be different or important to note while
building the Patagona gigas.

## Bill of materials

| Qty    | Description                                                                                        |
| ------ | -------------------------------------------------------------------------------------------------- |
| 1      | Gigas PCB (can be printed by uploading the [zip file][gigas-gerber] to [JLC][jlcpcb])              |
| 3      | [3D printed cases][case]                                                                           |
| 1      | [XIAO BLE][xiao]                                                                                   |
| 1      | [SMD 5x5x3 tactile switch][reset] for the reset button (similar to [this][pts526] or [this][ts18]) |
| 1      | [Alps SSSS811101 SPDT slide switch][power] for the battery on/off                                  |
| 1      | [3.7v 400mAh 802525 LiPo battery][battery] or smaller (max internal space: 8x28x29mm)              |
| 1      | [JST PH-2 battery jack][jst]                                                                       |
| 1      | Alps Alpine [SKRHADE010 five-way switch][fiveswitch]                                               |
| 30-32  | SOD-123 [1N4148W SMD diodes][sod123]                                                               |
| 30-32  | Kailh [choc hot swap sockets][sockets]                                                             |
| 30-32  | [Choc v1][chocv1] or [v2 switches][chocv2] of your choice                                          |
| 30-32  | [Low profile choc v1][chockeycaps] or [v2 keycaps][mxkeycaps] of your choice                       |
| 9 (3)  | [M2 x 6mm countersunk screws][screws6mm]                                                           |
| 9 (3)  | [M2 hex nuts][hexnuts]                                                                             |
| 3      | [M2 x 10mm countersunk screws][screws10mm]                                                         |
| 3      | [M2 heat-set inserts 3mm x 3mm][heatset]                                                           |
| 10 (8) | [6mm x 1.5mm bumpons][bumpons]                                                                     |
| ~1cm   | [1.75mm transparent 3D printer filament][filament] for the "fiber optic" led light guide           |
| 4      | short (1-2cm) pieces of [26 gauge electrical wire][wire]                                           |

**Note**: When assembling a gigas build in a rectangle case, you will use fewer 6mm screws, hex nuts, and bumpons.
The quantities for the rectangle case are given in parentheses.

## Useful equipment

You will need:

- a [soldering iron][pinecil]
- some [good quality solder][kester]
- precision tweezers
- wire cutter / stripper

You should ideally have access to:

- a [heat-set insert tool][heatsettool]
- a decent hands-free magnifying glass
- isopropyl alcohol and an old toothbrush

## Getting the PCB

The PCB can be easily ordered from a circuit board manufacturer with an online store.
I used [JLC][jlcpcb] because--at least at the time of my order--their prices are unbeatable.

To order, you can simply upload the [gerber zip file][gigas-gerber] to their website,
accept all of the defaults, and wait a week or two for the boards to arrive.

However, the minimum order at JLC is 5 copies, so you'll likely end up
with 4 extra PCBs. I don't really have any advice for what to do with
the extras, but you maybe could give one to a friend!

A couple items that you may want to customize:

- the color of the board; I printed mine in black
- HASL can be lead-free if you are also using lead-free solder, or you can splurge for ENIG, but it's definitely not required

![gigas pcb render](images/gigas/pcb-render.jpg)

## Getting the case

If you have access to a 3D printer, the [case][case] is very easy to print yourself.

If you don't have your own printer, no worries.
You will probably want to send in your print order around the same time you order the PCB.
I've used [JLC][jlc3dp] in the past with good results.

Just remember that you should print the battery cover
in nylon or PLA rather than resin,
though all other parts of the case can be printed in resin.
The reason for this is that the design calls for heat-set inserts
to be melted into that piece, and resin doesn't work for that.

## General soldering order

Although you can work in any order you prefer,
I like to start with the smaller components, then move to the larger,
and finish with bulky items that go on the top of the board.

So, the order I install:

### Installed on the bottom of the board

- diodes
- hotswap sockets
- power switch
- reset switch
- xiao
- reset and battery wire connections to xiao

### Installed on the top of the board

- jst (inserted from the top, soldered from the bottom)
- five-way switch (the only component installed entirely from the top of the board)

## Step-by-step instructions

Let's get started, shall we?

### Solder the diodes

![diodes and PCB ready to begin soldering](images/gigas/diodes-start.jpg)

Diodes are directional components, and must be soldered in the correct orientation.

To determine the orientation, look for a line printed on one edge of the diode.
You may need to use a magnifier glass and adjust the angle of light hitting the diode
in order to see it clearly.
Once you find the line on the diode, you can align it with the silk-screened line on the PCB,
and then solder with both lines on the same side.

All diodes are installed in roughly the same direction on the board, with the line on the right.

To easily install a diode, first place a small amount of solder onto one of the diode pads.

![diode with one pad soldered, ready to place](images/gigas/diode-first-pad.jpg)

Then grab the diode with tweezers and orient it correctly.
Reheat the soldered pad, then slide the diode into place.
Remove the heat, and when the solder cools, release the diode.

![diode with both legs soldered in place](images/gigas/diode-soldered.jpg)

With one leg installed, you can apply solder to the other leg.

Complete all diodes, being sure to double-check that they are all oriented
correctly and both legs are soldered before moving to the next step.

### Solder the hotswap sockets

![sockets ready to be soldered to the PCB](images/gigas/sockets-start.jpg)

While hotswap sockets will work the same way electrically no matter which way they are installed,
the tolerances of the case are such that you should take care to install these
according to the markings on the PCB as well.

In the following picture, the blue box on SW20 shows the silkscreen line before
a hotswap socket is installed, the green box on SW22 shows a hotswap socket in the
correct orientation where the silkscreen line is mostly hidden by the edges of the socket,
and the red box on SW19 shows an incorrectly oriented
hotswap socket, where the silkscreen line is clearly visible poking out around the
angled edges of the socket.

![three sockets showing correct and incorrect orientation](images/gigas/socket-orientation.jpg)

Place the hotswap socket into the PCB holes,
being sure that the silkscreen on the PCB matches the orientation of the socket,
then apply solder to one of the legs.

This will take a lot more solder than the diode did, but be careful not to get carried away.
The solder should not overflow the pad or rise above the socket.

![hotswap socket with first leg soldered](images/gigas/socket-first-leg.jpg)

Once done, use tweezers to hold the socket in place until the solder cools.

Flip the board around and solder the other pad.

![hotswap socket with both legs soldered](images/gigas/socket-done.jpg)

Solder all the sockets on the board.

### Solder the power switch

![power switch ready to be soldered](images/gigas/power-start.jpg)

To solder the power switch, first apply a bit of solder to one of the pads.

Holding the power switch in place with tweezers, reheat the soldered pad
and align the power switch. Remove the heat, and release the power switch
only after the solder has cooled.

Once satisfied with the placement, solder each of the other pads, being very careful
not to allow the solder to connect neighboring pads.

![power switch fully soldered](images/gigas/power-done.jpg)

### Solder the reset switch

![reset switch ready to be soldered](images/gigas/reset-start.jpg)

The reset switch follows the same process,
though it can require a little more attention to align it correctly.

Apply solder to one pad,
use tweezers to slide the reset switch into place while reheating the solder,
and remove the heat when you are satisfied with the alignment.

![first pad ready to receive the reset switch](images/gigas/reset-one-pad.jpg)

Complete the remaining pads.

![reset switch fully soldered](images/gigas/reset-done.jpg)

### Solder the xiao

![PCB elevated for installation of the XIAO](images/gigas/xiao-start.jpg)

The xiao is installed upside down,
with the components on top of the xiao extending
into and beyond the space of the PCB.

Because of this, the xiao will need a little space under it,
since it is thicker than the PCB.
I like to stack another board below it to provide that space,
but any method of elevating the board will work.

Begin by placing a little solder on one of the corner pads.
Put the xiao in place, reheat the soldered pad,
and ensure the correct placement of the xiao before removing the heat.

![xiao with one corner pad soldered](images/gigas/xiao-one-pad.jpg)

Once the solder cools and you are satisfied that the xiao is in the correct place,
solder the opposite corner. It can be a little tricky to get heat on both the
pad of the PCB as well as the xiao's pad, so take your time, use plenty of heat,
and wait until you see the solder moving below the xiao and filling a bit of the
through-hole.

![xiao with opposite corner pad soldered](images/gigas/xiao-opposite-corner.jpg)

![xiao fully soldered to PCB](images/gigas/xiao-done.jpg)

Repeat this process until all the pads of the xiao are soldered well to the board.
I also usually re-solder the first pad I did,
since it likely has the least amount of solder on it compared to all the others.

### Solder the xiao connections

Begin by cutting a short piece of wire a little bit longer than needed to connect the pad to the through-hole.

For the power connection, this connects the BAT+ hole on the PCB with the BAT+ pad on the back of the xiao.

![BAT+ wire ready to connect xiao to PCB](images/chaski/wire-start.jpg)

Trim about 1.5mm of shielding off each end of the wire, and then solder the wire.
I like to start with the end on the xiao's pad, and once that is in place,
stick the other end into the through hole and solder there as well.

The reset wire connects the RST hole on the PCB to the unlabeled reset pad on the back of the xiao.

Even though it's unlabeled, it's not difficult to find.
There are four circular pads near the USB port at the top of the xiao.

Location of the RST pad on the XIAO BLE:

![location of RST pad on the back of the XIAO BLE](images/xiao-reset.jpg)

Install it using the same method as the BAT+ wire.

![RST wire connecting xiao to PCB](images/chaski/wire-two.jpg)

The final two wires connect the NFC1 and NFC2 holes on the PCB to the NFC pads on the back of the xiao.
The xiao has two NFC pads near each other, though only one of them is labeled.
Install these wires so that they run parallel to each other:
NFC2 on the PCB connects to the right NFC pad on the xiao,
and NFC1 on the PCB connects to the left NFC pad on the xiao.
Install NFC2 first, then NFC1.

![NFC2 wire cut and ready to install](images/chaski/wire-three.jpg)

![NFC2 installed, NFC1 wire cut and ready to install](images/chaski/wire-four.jpg)

![all four wires complete](images/chaski/wire-done.jpg)

### Solder the JST connector

Unlike all components so far,
the JST connector needs to be inserted into place from the opposite side of the board.

![JST connector location on the front of the PCB](images/gigas/jst-location.jpg)

Once in place, secure it temporarily with a little tape
while you solder the legs on the other side of the board.

![JST legs poking through the back of the PCB](images/gigas/jst-legs.jpg)

![JST legs fully soldered on the back of the PCB](images/gigas/jst-soldered.jpg)

Remove the tape when done.

![completed JST connector on the front of the board](images/gigas/jst-done.jpg)

### Solder the five-way switch

The five-way switch is the only component soldered entirely from the front of the board.
It has guide bosses on its underside that insert into corresponding holes in the PCB,
which keeps it properly aligned while you solder.

![five-way switch ready to be soldered](images/gigas/skrh-location.jpg)

Begin by inserting the guide bosses into the holes in the PCB.
Then solder the two large ground pads on either side of the switch first.
These will hold the switch firmly in place and prevent it from shifting
while you complete the finer work.

![five-way switch ground pads soldered](images/gigas/skrh-gnd-soldered.jpg)

Once the switch is secure, solder the remaining six smaller pads around the edges of the switch.

![five-way switch fully soldered](images/gigas/skrh-done.jpg)

### Clean the board

Congratulations. You are done soldering all the components.

Use isopropyl alcohol and an old toothbrush to clean the extra flux from the board.

Take a moment and admire your work.

![soldered board, back view](images/gigas/soldered-back.jpg)

![soldered board, front view](images/gigas/soldered-front.jpg)

## Install the case

### Install the heat-set inserts

While you can use your regular soldering tip for installing the heat-set inserts,
it is easier to get better results using a heat-set tip.

![heat-set inserts ready to be installed](images/gigas/heat-set-start.jpg)

Place the heat-set insert above the hole, ensuring that the smaller side is down.
It can be a bit hard to see the different widths of each end,
so feel free to use a magnifier glass if needed.

![heat-set orientation placement](images/chaski/heat-set-placement.jpg)

Place the heat-set tip into the heat-set insert and apply very gentle pressure
while the tip heats the insert.
The plastic will melt and the insert will glide into place.
Don't push it below the surface of the plastic.

![applying the heat-set insert with a heat-set tip](images/chaski/heat-set-application.jpg)

Repeat for the other four heat-set inserts.

![heat-set insert installed flush with battery cover surface](images/gigas/heat-set-done.jpg)

### Top plate

Set the top plate upside down and insert the hex nuts into place in the case.
Note that there are 4 hex nuts used for the standard case,
and only 2 if you are using the rectangle case.

![a hex nut inserted into place in the top case](images/gigas/hex-nuts.jpg)

Carefully lift the top plate from the table,
and while holding it upside down so that the hex nuts do not fall,
insert the completed board into place.
The JST connector will extend below the board,
so it can help to take a couple of books to support each side of the board
in preparation for the next step.

### Bottom case

Place the bottom of the case upside down in place on the exposed bottom of the board.
Insert and secure the 6mm countersunk screws on the left and right sides of the case:
4 screws for the standard case, or 2 if using the rectangle case.

Leave the 5 center screw holes empty for now.

![one screw installed in the bottom case](images/gigas/bottom-screw.jpg)

### Battery

Insert the battery JST cable into the JST connector,
carefully observing the polarity of the wires.

![red and black battery wires should align with positive and negative connections on the jst terminal](images/gigas/jst-alignment.jpg)

The red wire should always connect to the + symbol on the board,
and the black wire to the - symbol.
If your battery cable is wired incorrectly, stop now and replace
the wire or buy a different battery.

![battery connected to jst](images/gigas/jst-connected.jpg)

### LED light guide

Cut a piece of transparent filament about 1cm in length.
Ensure that it can be inserted into the LED light guide hole.
Tolerances on 3D prints are not always great,
so you may need to slightly enlarge the hole,
or if the hole is too loose,
you may need to apply a small amount of glue when installation is complete.

Test the length of the filament by inserting it through the battery cover and
into its place in the top case.
I like to do this before the battery cover is installed so that I can more easily
work with the filament and the holes as needed.

![filament inserted into place](images/gigas/light-guide-inserted.jpg)

Ensure that the filament is flush or slightly protrudes maybe half a millimeter when fully inserted.
This filament will bring the light from the LED on the XIAO up to the top surface of the case.

![LED light visible through filament light guide](images/gigas/light-guide-active.jpg)

### Battery cover

Finally, arrange the battery and wires in place so that the battery cover can close,
and then insert the five 10mm countersunk screws through the bottom of the case to secure the battery cover.

![board installed in top case](images/gigas/top-case-installed.jpg)

### Switches and keycaps

Take care when inserting the switches that the pins of each switch are straight.
Gently place the switch in place, and position it so it is aligned before pushing it
straight down. Do not try to assemble it at an angle. It may take a bit of force to get the
switch fully seated. There should be no gap between the skirt of the switch and the top plate.

![installing the switches](images/gigas/switches.jpg)

Attach the keycaps. Again, try to first align the keycap and then use firm even pressure.

![installing the keycaps](images/gigas/keycaps.jpg)

### Joystick cap

Press the joystick cap firmly onto the five-way switch until it snaps into place.

![joystick cap installed on five-way switch](images/gigas/joystick-cap.jpeg)

### Attach the bumpons

Once everything else is installed, flip the keyboard back over and press each bumpon into place
in its designated spot. Your keyboard is now ready for its photoshoot and the installation of firmware.

![bumpons installation](images/gigas/bumpons.jpg)

## Photoshoot

If you'd like to share your hard work with the rest of the world, take a photo of your new Patagona gigas and
send it to me. My contact information is on my profile. Congratulations on a job well done!

![completed gigas build](images/gigas/complete.jpg)

## Firmware installation

You can grab the default firmware from the [firmware repository][firmware].

To install it, attach the keyboard to the computer by USB,
double-tap the reset button on the bottom of the board,
and then drag the appropriate firmware
to the new device that appears as a thumb drive on the computer's file manager.

![drag and drop to install](images/gigas/drag-and-drop-firmware.jpg)

Note, however, that the "thumb drive" is not actually a real thumb drive, and normal copy and paste operations
do not work as they do on a real thumb drive. Copying the file to the keyboard is really a command to the
microcontroller to install firmware. As soon as the firmware is installed, the keyboard will reboot and start
running the new firmware. This will make the "thumb drive" immediately disconnect from the computer, which
is often seen as an error by the operating system.

![ignore read/write error](images/ignore-write-error.jpg)

But you are free to ignore that error and just start using the keyboard. Just don't try to copy anything that's
not a firmware to the keyboard, and you should be fine.

## Problems?

For more information about using [ZMK][zmk], including how to use [ZMK Studio][zmkstudio],
or how to configure your own [zmk repo][zmkrepo], please refer to the [ZMK docs][zmkdocs].

If you still have the default keymap installed and want to update the layout with [ZMK Studio][zmkstudio],
the "ZMK Studio unlock" key combination is accessed
by simultaneously pressing the keys that are by default mapped to Esc and Backspace.
Note that as of the time of this writing, you will need to be using Chrome or Edge to get it to work.

If a single key isn't working,
the first thing to look at is that the switch has been installed properly,
and the pins aren't bent.
The second most likely cause of a single key not working is an improperly installed diode.
Find the diode closest to that key and ensure it is installed in the correct orientation
and that both legs are well attached to the PCB.

If you need to troubleshoot the soldering by shorting MCU pins to test the firmware is working,
the pins used for each switch are printed on the PCB next to the switch.
An example label would be something like `P0-P5`,
which means that the switch connects P0 to P5.
To test that switch, simply short those two pins together.

If you need to correct any soldering,
access to the bottom of the PCB involves removing all 9 screws from the bottom of the case.
You do not necessarily need to remove all the switches.
However, if you are doing extensive re-soldering work,
it may be a good idea to fully remove the PCB from the case.
This will prevent the heat from the soldering iron from deforming the case.

One unexpected feature of the XIAO BLE microcontroller is that the power switch must be "ON"
in order for the battery to charge while plugged into a USB-C cable.
An easy way to remember: sliding the power switch toward the USB port turns the keyboard on,
while sliding it away from the USB port turns it off.

[battery]: https://ydlbattery.com/products/3-7v-400mah-802525-lithium-polymer-ion-battery
[bumpons]: https://www.amazon.com/HAWORTHS-Bumpers-Self-adhesive-Bumpons-Diameter/dp/B07R17T68B
[case]: https://github.com/ctranstrum/patagona/tree/main/cases/gigas#readme
[gigas-gerber]: pcb/gigas.zip
[chockeycaps]: https://lowprokb.ca/collections/keycaps/products/ldsa-low-profile-blank-keycaps
[chocv1]: https://lowprokb.ca/collections/switches/products/ambients-silent-choc-switches
[chocv2]: https://www.lofree.co/products/void-low-profile-pom-switches
[filament]: https://gizmodorks.com/nylon-filament-200-g-spool/
[firmware]: https://github.com/ctranstrum/patagona-zmk
[fiveswitch]: https://www.mouser.com/en/ProductDetail/Alps-Alpine/SKRHADE010?qs=seHrhfPpLDxlAi0Di%252BJD5Q%3D%3D
[heatset]: https://www.partsbuilt.com/m2-heat-set-thread-insert-3mm-wide-3mm-long-4-pack/
[heatsettool]: https://pine64.com/product/pinecil-threaded-insert-tips-set-and-adapter/
[hexnuts]: https://monsterbolts.com/products/nuts-din934-a2
[how-to-solder]: https://www.google.com/search?q=youtube+how+to+solder
[jlc3dp]: https://jlc3dp.com/
[jlcpcb]: https://jlcpcb.com/
[jst]: https://typeractive.xyz/products/battery-jack
[kester]: https://typeractive.xyz/products/kester-solder-wire-tube
[mxkeycaps]: https://nuphy.com/collections/keycaps?compatibility=low-profile-keys
[pinecil]: https://typeractive.xyz/products/pinecil
[power]: https://typeractive.xyz/products/power-switch
[pts526]: https://www.littelfuse.com/assetdocs/littelfuse-ck-tactile-pts526-series-datasheet?assetguid=bb56c1b4-71ca-4262-9bd7-cf3e3c572bb3
[reset]: https://www.aliexpress.us/item/3256806760201032.html
[screws6mm]: https://monsterbolts.com/products/mach-phil-flat-a2-m2?variant=21222571802707
[screws10mm]: https://monsterbolts.com/products/mach-phil-flat-a2-m2?variant=21222572064851
[sockets]: https://typeractive.xyz/products/hotswap-sockets?variant=45742200324327
[sod123]: https://typeractive.xyz/products/smd-diodes
[soldering101]: https://www.google.com/search?q=youtube+soldering+101
[splitkb-build-guide]: https://docs.splitkb.com/product-guides/aurora-series/build-guide
[ts18]: https://www.sameskydevices.com/product/resource/ts18.pdf
[wire]: https://www.walmart.com/ip/26-Gauge-PVC-Hookup-Wire-1-5m-5ft-26AWG-Flexible-Electrical-Wire-Tinned-Copper-Stranded-6-Color-1-5mm/5487030958
[xiao]: https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html
[zmk]: https://zmk.dev
[zmkdocs]: https://zmk.dev/docs
[zmkrepo]: https://zmk.dev/docs/user-setup
[zmkstudio]: https://zmk.studio/
