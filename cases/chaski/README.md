# Patagona Chaski Cases

> A quick note: these files were created through ergogen and can be
> modified and re-created if any changes are needed, which is great,
> except that the software is still a little bit buggy, so it doesn't
> make perfect STL files. Even though these can look a little strange,
> I have printed all of these files and they came out okay for me.

## Keyboard case files

### Full size printer

If you have access to your own 3D printer with a large print bed
or if you are sending the files away to be printed,
you will want to use the full size cases:

| file                                          | description                                                          |
| --------------------------------------------- | -------------------------------------------------------------------- |
| [bottom](bottom_case.stl)                     | installed below the PCB                                              |
| [top 2+2](top_case_2_2.stl)                   | top case with two thumb keys on each hand                            |
| [top 2+3](top_case_2_3.stl)                   | top case with two thumb keys on the left and three on the right      |
| [top 3+2](top_case_3_2.stl)                   | top case with three thumb keys on the left and two on the right      |
| [top 3+3](top_case_3_3.stl)                   | top case with three thumb keys on each hand                          |
| [battery cover](battery_cover.stl)            | above the top plate to cover the battery (do not print in resin)     |

Note that for best results on an FDM printer, the top plate and the battery cover should be printed upside down.

### Mini printer

If you have access to your own 3D printer
but it has a print bed too small for the full-size case,
you can print the 3-part (plus the battery cover) top case:

| file                                                  | description                                                      |
| ----------------------------------------------------- | ---------------------------------------------------------------- |
| [center](top_dovetail.stl)                            | center top case dovetail piece                                   |
| [left 2](top_dovetail_left_2.stl)                     | left top case piece with two thumb keys                          |
| [left 3](top_dovetail_left_3.stl)                     | left top case piece with three thumb keys                        |
| [right 2](top_dovetail_right_2.stl)                   | right top case piece with two thumb keys                         |
| [right 3](top_dovetail_right_3.stl)                   | right top case piece with three thumb keys                       |
| [battery cover](battery_cover.stl)                    | above the top plate to cover the battery (do not print in resin) |

Note that for best results on an FDM printer, the top plate and the battery cover should be printed upside down.

### Rectangular snap-fit case

I've also created an alternative case that uses fewer screws and instead relies on a snap-fit design
to remain securely fastened without sacrificing any additional height compared to the original sandwich design.

Unlike the sandwich-style cases, it is available only for full-size printer beds.

| file                                                        | description                                                          |
| ----------------------------------------------------------- | -------------------------------------------------------------------- |
| [bottom](rectangle_bottom_case.stl)                         | bottom case                                                          |
| [top 2+2](rectangle_top_case_2_2.stl)                       | top case with two thumb keys on each hand                            |
| [top 2+3](rectangle_top_case_2_3.stl)                       | top case with two thumb keys on the left and three on the right      |
| [top 3+2](rectangle_top_case_3_2.stl)                       | top case with three thumb keys on the left and two on the right      |
| [top 3+3](rectangle_top_case_3_3.stl)                       | top case with three thumb keys on each hand                          |
| [battery cover](battery_cover.stl)                          | above the top case to cover the battery (do not print in resin)      |

Note that it is especially important when printing this case style on an FDM printer to place the top case
upside down in the slicer so that the top surface of the case is in direct contact with the print bed.
Otherwise you are going to have a real struggle with support removal.

## Print quality hints

When printing this case,
it should be noted that the battery cover is designed
to have heat-set inserts melted into it,
so it is not recommended to print using a resin printer
or using a material that cannot be melted easily,
unless you plan on altering the case design to use another method
to fasten the case together.

All other parts of the case can be printed in whatever material you like.

For FDM printing,
the top case and the battery cover are best printed upside down,
so that the visible part of the case is against the print bed,
giving the best top surface and requiring minimal supports to print.

If you are having trouble with some of the raised areas sagging during printing,
you can try to enable supports.
While I was able to tune my printer to get great results without supports,
if your printer is not well calibrated,
it may be worth it to enable supports and spend a little time
post-processing the prints to remove the supports prior to assembly.
