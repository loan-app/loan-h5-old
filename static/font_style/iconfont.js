;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-yinxingqiasolid" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M65.027527 345.627808l892.065132 0 0-52.242851c0-33.909297-27.489074-61.398372-61.398372-61.398372L125.467061 231.986585c-33.909297 0-61.398372 27.489074-61.398372 61.398372l0 437.231109c0 33.909297 27.489074 61.398372 61.398372 61.398372l770.227226 0c33.909297 0 61.398372-27.489074 61.398372-61.398372L957.092659 429.057963 65.027527 429.057963 65.027527 345.627808zM688.686606 555.024909c18.838044 0 35.956933 7.318686 48.703235 19.252483 12.745279-11.933797 29.865191-19.252483 48.702212-19.252483 39.373753 0 71.291696 31.917944 71.291696 71.291696 0 39.372729-31.917944 71.291696-71.291696 71.291696-18.838044 0-35.956933-7.318686-48.702212-19.252483-12.745279 11.933797-29.865191 19.252483-48.703235 19.252483-39.372729 0-71.291696-31.917944-71.291696-71.291696C617.395934 586.942853 649.313877 555.024909 688.686606 555.024909z"  ></path>' +
    '' +
    '<path d="M957.092659 345.627808l0.787946 0 0 83.431178-0.787946 0 0-83.431178Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zhimaxinyong" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M664.516 109.332C616.656 70.944 571.536 52 522.18 52c-26.672 0-54.84 5.732-85.248 16.952-30.66 11.22-86 54.84-110.676 121.144 0 0-43.588 145.904 77.772 259.74l9.972 10.468c65.308 66.304 158.788 102.952 159.284 207.144 4.264 82.756-69.048 163.772-157.04 167.512l-7.48 0c-44.872 0-84.252-16.952-98.96-27.92-12.96-9.472-24.928-19.688-35.896-29.912-12.464-17.696-73.784-97.716-13.712-195.68 27.12-40.572 72.72-82.576 120.02-115.732-30.144-27.868-111.368-117.272-84.412-250.876-341.928 275.148-158.552 620.908-11.18 704.876 55.836 37.636 128.372 57.08 203.904 57.08 119.152 0 245.78-47.608 328.288-145.824C933.228 692.628 1015.988 376.052 664.516 109.332z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-grxx" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.503184 198.930924c108.039753 0 216.035504-0.044002 324.053768 0.042979 12.200892 0.042979 24.533791 0.130983 36.602676 1.661851 58.207761 7.390325 86.940181 38.178569 87.136656 95.11743 0.436952 141.647209 0.480954 283.296464 0 424.94265-0.218988 61.707472-42.377199 103.86466-105.832479 104.038622-228.257885 0.612961-456.516794 0.699942-684.775703-0.041956C105.429296 824.472488 65.348399 785.157025 64.977962 724.06456c-0.809436-140.991269-0.830925-281.983561-0.021489-422.975853 0.415463-68.484836 35.378801-101.632827 106.202917-101.983821C284.621647 198.492948 398.061392 198.930924 511.503184 198.930924L511.503184 198.930924zM413.018051 680.638472c0-28.031455 1.334393-53.70214-0.348948-79.198862-2.098803-31.836111-27.42054-60.74454-60.000596-63.193314-42.420178-3.191695-85.430803-3.234674-127.850981-0.39295-29.343335 2.012845-51.647339 21.42703-56.763875 49.416529-5.576001 30.394271-3.892661 62.055396-5.378503 93.367574C248.367919 680.638472 329.620559 680.638472 413.018051 680.638472L413.018051 680.638472zM364.716927 413.04261c-0.130983-40.627343-32.951516-72.026502-75.459698-72.24549-43.053605-0.218988-76.640594 31.968118-76.575103 73.381361 0.088004 41.196302 34.176415 73.907341 76.597615 73.513367C331.982352 487.299922 364.825397 454.763869 364.716927 413.04261L364.716927 413.04261zM660.694214 552.197043c39.402445 0 78.805912 0.174986 118.208357-0.086981 22.695931-0.176009 33.497962-8.527219 34.328887-25.320714 0.91893-18.324362-9.183159-29.12537-32.51354-29.344358-79.460829-0.699942-158.966684-0.743944-238.449002 0.086981-23.090927 0.261967-33.083522 11.282985-32.208595 29.738331 0.809436 16.96848 11.085487 24.708776 34.459871 24.839759C583.245207 552.372028 621.969199 552.197043 660.694214 552.197043L660.694214 552.197043zM660.694214 642.722893c39.402445 0 78.805912 0.174986 118.208357-0.086981 22.695931-0.174986 33.497962-8.528242 34.328887-25.321737 0.91893-18.322316-9.183159-29.124347-32.51354-29.344358-79.460829-0.699942-158.966684-0.742921-238.449002 0.089028-23.090927 0.261967-33.083522 11.280939-32.208595 29.737308 0.809436 17.011459 11.085487 24.708776 34.459871 24.839759C583.245207 642.897878 621.969199 642.722893 660.694214 642.722893L660.694214 642.722893zM703.989319 453.932943c25.036234 0 50.072469 0.261967 75.131216-0.088004 21.144597-0.349971 34.395402-10.408058 34.001429-25.933675-0.524957-20.204178-16.378032-25.014745-32.339578-25.276712-52.085314-0.873904-104.235097-0.873904-156.320411 0.042979-20.116173 0.349971-33.083522 12.463882-31.027698 26.632594 2.667762 18.192356 15.67809 24.664774 33.366979 24.621795C652.538455 453.844939 678.253143 453.932943 703.989319 453.932943L703.989319 453.932943zM703.989319 487.823855"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-lianxiren" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M824.351744 827.704698C883.910822 857.771814 867.667437 960 851.424051 960L17.596999 960C1.353615 960-20.30423 851.758387 39.254845 827.704698 223.346532 737.503354 379.263238 704.776499 290 627.835937 271.78125 612.132263 241.976563 587.726563 232.867187 564.117187 223.757812 540.507812 223.874504 541.213739 223.098957 539.060387 147.296497 515.006696 131.13351 432.84755 131.13351 390.75359 131.13351 348.659631 163.539882 310.55032 196.02665 304.536897 196.02665 286.496629 212.51761 250.416108 212.51761 238.389261 217.93207 166.228188 213.371624 184.268456 251.272854 64 289.174083 82.040268 337.250733 94.229567 356.008472 86.510216 383.080779 74.483371 407.438219 64 429.096065 64 488.65514 64 596.944367 100.080537 640.260058 220.348993 645.674522 250.416108 645.674522 274.469798 645.674522 304.536913 678.161286 310.550335 705.233594 346.630872 705.233594 382.711409 705.233594 424.805369 694.404672 521.020134 618.602213 539.060403 618.029674 541.6039 617.336052 544.147398 616.521347 546.698006 609.631436 568.268328 594.081674 590.347157 569.872061 617.234899 483.240678 719.463085 640.260058 731.489933 824.351744 827.704698ZM990.85367 773.008698C828.444602 688.170048 696.699059 682.487904 772.489958 585.529447 794.144499 561.289834 805.80361 508.895864 816.63088 484.65625 881.594509 466.47654 898.593459 397.468195 898.593459 361.108774 898.593459 324.749354 866.340051 294.276328 833.85824 288.216425 833.85824 263.976812 833.85824 233.677295 828.444602 209.437681 790.549152 94.299517 693.103712 64 638.967354 64 633.553718 64 693.236544 130.852504 709.477453 179.331731 720.043642 220.599759 709.477453 237.628606 709.477453 265.683293 741.959264 283.863004 772.489952 320.765364 772.489952 369.244591 772.489952 466.203046 767.937293 537.883799 702.973664 550.003606 686.732762 574.243219 673.399674 599.861348 646.331494 624.100961 619.263317 654.40048 597.608773 673.617958 646.331494 697.857574 662.572403 703.917478 814.128352 762.76279 868.26471 787.002406 900.746522 805.182112 913.658118 846.394381 919.07175 888.813702L1016.51719 888.813702C1016.51719 888.813702 1044.990029 803.308211 990.85367 773.008698Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shouji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0C229.28 0 0 229.216 0 512s229.28 512 512 512c282.816 0 512-229.216 512-512S794.816 0 512 0zM757.632 810.88c0 42.144-57.088 76.448-127.52 76.448l-235.904 0c-70.56 0-127.552-34.272-127.552-76.448L266.656 213.056c0-42.176 56.992-76.352 127.552-76.352l235.904 0c70.432 0 127.52 34.176 127.52 76.352L757.632 810.88z"  ></path>' +
    '' +
    '<path d="M317.376 212.736l389.536 0 0 582.752-389.536 0 0-582.752Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M753.120653 732.985469 266.198204 732.985469c-26.83298 0-48.681796-21.817469-48.681796-48.608653L217.516408 392.578612c0-26.812082 21.848816-48.629551 48.681796-48.629551l103.601633 0 11.723755-23.468408c3.657143-6.060408 6.206694-12.632816 8.704-18.996245 6.35298-16.27951 15.067429-38.588082 38.274612-38.588082l162.324898 0c23.217633 0 31.932082 22.308571 38.274612 38.588082 2.497306 6.363429 5.046857 12.946286 8.045714 17.836408l12.39249 24.628245 103.601633 0c26.83298 0 48.681796 21.80702 48.681796 48.629551l0 291.798204C801.823347 711.178449 779.974531 732.985469 753.120653 732.985469L753.120653 732.985469zM266.198204 376.361796c-8.944327 0-16.216816 7.282939-16.216816 16.216816l0 291.798204c0 8.923429 7.262041 16.206367 16.216816 16.206367L753.131102 700.583184c8.944327 0 16.216816-7.282939 16.216816-16.206367L769.347918 392.578612c0-8.923429-7.262041-16.216816-16.216816-16.216816L629.467429 376.361796l-20.699429-41.36751c-3.803429-6.133551-7.042612-14.419592-9.895184-21.723429-2.392816-6.144-6.394776-16.425796-9.027918-18.264816l-161.332245 0.30302c-1.64049 1.525551-5.652898 11.807347-8.045714 17.951347-2.852571 7.293388-6.091755 15.579429-10.553469 22.872816l-20.062041 40.207673L266.198204 376.340898 266.198204 376.361796 266.198204 376.361796zM509.680327 668.149551c-80.551184 0-146.087184-65.452408-146.087184-145.899102 0-80.425796 65.536-145.888653 146.087184-145.888653 80.519837 0 146.066286 65.462857 146.066286 145.888653C655.736163 602.707592 590.200163 668.149551 509.680327 668.149551L509.680327 668.149551zM509.680327 408.78498c-62.652082 0-113.622204 50.907429-113.622204 113.465469 0 62.578939 50.970122 113.475918 113.622204 113.475918 62.620735 0 113.590857-50.89698 113.590857-113.475918C623.271184 459.692408 572.301061 408.78498 509.680327 408.78498L509.680327 408.78498z"  ></path>' +
    '' +
    '<path d="M511.216327 1022.443102c-281.443265 0-510.422204-228.696816-510.422204-509.774367 0-281.098449 228.978939-509.784816 510.422204-509.784816s510.422204 228.686367 510.422204 509.784816C1021.638531 793.746286 792.659592 1022.443102 511.216327 1022.443102zM511.216327 23.34302c-270.147918 0-489.942204 219.501714-489.942204 489.325714 0 269.813551 219.783837 489.325714 489.942204 489.325714s489.942204-219.512163 489.942204-489.325714C1001.158531 242.844735 781.374694 23.34302 511.216327 23.34302z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gerenxinxixiugai" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M699.037013 673.30048c1.010347 0.641707 1.993387 0.832853 3.072 1.39264 14.759253 10.881707 28.95872 22.350507 42.379947 35.416747 13.55776 13.093547 35.47136 13.093547 49.056427-0.191147 13.380267-13.06624 13.380267-34.4064-0.2048-47.67744-49.43872-48.237227-108.639573-83.462827-172.660053-105.444693 87.313067-51.44576 146.117973-144.7936 146.117973-251.61728-0.054613-162.010453-135.031467-293.80608-300.919467-293.80608s-300.946773 131.781973-300.946773 293.80608c0 107.820373 59.951787 202.001067 148.93056 253.242027C137.78944 620.50304 11.373227 784.902827 11.373227 977.810773c0 4.95616 1.18784 9.516373 3.072 13.653333 5.065387 12.260693 17.394347 21.149013 31.976107 21.149013 19.032747 0 34.420053-15.018667 34.420053-33.600853 0-209.114453 174.2848-379.467093 388.614827-379.65824 2.2528 0 4.62848 0.191147 6.88128 0.191147 8.874667 0.191147 17.831253 0.559787 26.54208 1.39264 6.498987 0.36864 13.134507 1.365333 19.633493 2.184533 4.068693 0.36864 8.06912 0.98304 12.137813 1.733973 8.369493 1.460907 16.520533 2.82624 24.41216 4.778667 1.18784 0.36864 2.430293 0.6144 3.863893 1.010347C611.751253 622.237013 657.73568 643.495253 699.037013 673.30048L699.037013 673.30048 699.037013 673.30048zM465.87904 531.469653c-127.849813 0-231.983787-101.512533-231.983787-226.358613 0-124.64128 103.942827-226.34496 231.79264-226.34496 127.83616 0 231.778987 101.49888 231.778987 226.34496C697.46688 430.20288 593.701547 531.70176 465.87904 531.469653L465.87904 531.469653z"  ></path>' +
    '' +
    '<path d="M907.359573 894.907733c-12.137813 0-24.28928 4.95616-33.041067 13.462187-8.710827 8.506027-13.776213 20.370773-13.776213 32.208213 0 11.892053 5.065387 23.702187 13.776213 32.23552 8.51968 8.506027 20.903253 13.43488 33.041067 13.43488 12.151467 0 24.33024-4.928853 33.041067-13.43488 8.68352-8.31488 13.76256-20.39808 13.76256-32.23552 0-11.892053-5.07904-23.702187-13.76256-32.208213C931.894613 899.863893 919.51104 894.907733 907.359573 894.907733L907.359573 894.907733z"  ></path>' +
    '' +
    '<path d="M1004.407467 659.633493c-12.520107-15.19616-35.170987-18.0224-51.172693-6.321493-74.738347 54.422187-271.837867 197.973333-307.008853 224.21504-43.554133 32.39936-86.30272 97.553067-86.30272 97.553067l6.51264 11.10016c0 0 42.543787-1.39264 118.33344-46.503253 60.33408-35.92192 242.059947-173.738667 313.71264-228.666027C1014.66112 698.477227 1017.378133 675.38944 1004.407467 659.633493L1004.407467 659.633493 1004.407467 659.633493z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gerenxinxi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M917.333333 170.666667H106.666667c-35.285333 0-64 28.714667-64 64v576c0 35.285333 28.714667 64 64 64h810.666666c35.285333 0 64-28.714667 64-64V234.666667c0-35.285333-28.714667-64-64-64z m21.333334 640a21.333333 21.333333 0 0 1-21.333334 21.333333H106.666667c-11.754667 0-21.333333-9.557333-21.333334-21.333333V234.666667c0-11.754667 9.578667-21.333333 21.333334-21.333334h810.666666c11.776 0 21.333333 9.578667 21.333334 21.333334v576z" fill="#231815" ></path>' +
    '' +
    '<path d="M448.597333 569.92A149.12 149.12 0 0 0 512 448c0-82.346667-66.986667-149.333333-149.333333-149.333333s-149.333333 66.986667-149.333334 149.333333a149.162667 149.162667 0 0 0 63.381334 121.92C207.914667 594.730667 150.826667 648.298667 123.733333 718.549333a21.333333 21.333333 0 1 0 39.808 15.36C195.072 652.224 275.093333 597.333333 362.666667 597.333333c87.466667 0 167.445333 54.784 199.018666 136.341334a21.333333 21.333333 0 1 0 39.786667-15.424c-27.136-70.08-84.16-123.541333-152.874667-148.330667zM362.666667 554.666667c-58.816 0-106.666667-47.850667-106.666667-106.666667s47.850667-106.666667 106.666667-106.666667 106.666667 47.850667 106.666666 106.666667-47.850667 106.666667-106.666666 106.666667zM845.333333 362.666667h-0.106666l-277.333334 0.661333c-11.776 0.042667-21.290667 8.981333-21.226666 20.778667a21.333333 21.333333 0 0 0 21.333333 21.226666h0.106667l277.333333-1.002666a21.034667 21.034667 0 0 0 21.226667-21.098667c-0.064-11.754667-9.6-20.565333-21.333334-20.565333zM845.333333 490.666667h-0.170666l-178.666667 0.661333c-11.776 0.085333-21.248 9.045333-21.162667 20.821333a21.333333 21.333333 0 0 0 21.333334 21.184h0.170666l178.666667-1.002666a21.034667 21.034667 0 0 0 21.162667-21.162667c-0.085333-11.712-9.621333-20.501333-21.333334-20.501333zM845.333333 618.666667h-0.149333l-206.677333 0.661333c-11.776 0.085333-21.269333 9.024-21.184 20.821333a21.333333 21.333333 0 0 0 21.333333 21.184h0.149333l206.677334-1.002666a21.034667 21.034667 0 0 0 21.184-21.141334c-0.085333-11.733333-9.6-20.522667-21.333334-20.522666z" fill="#231815" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-you" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M311.132 928.54c-7.234-0.006-12.832-3.611-15.026-9.076-2.482-6.183-1.228-11.795 3.33-16.525 6.45-6.693 13.046-13.247 19.619-19.822 48.597-48.611 97.178-97.237 145.813-145.81 72.833-72.74 145.675-145.471 218.654-218.063 3.569-3.55 3.055-5.124-0.189-8.359-70.537-70.343-140.932-140.829-211.399-211.242-50.383-50.344-100.837-100.616-151.248-150.931a2979.983 2979.983 0 0 1-21.394-21.569c-6.8-6.927-7.165-15.992-0.98-22.139 6.034-5.996 15.042-5.783 21.912 0.547 1.342 1.237 2.602 2.563 3.893 3.854l395.115 395.224c8.218 8.22 8.237 12.714 0.085 20.868-132.063 132.098-264.135 264.189-396.153 396.332-3.797 3.8-7.832 6.581-12.032 6.711z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-PCbofangye_tuijian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M510.33 255.87c-105.53 0-191.4 85.86-191.4 191.4s85.86 191.38 191.4 191.38 191.4-85.85 191.4-191.38-85.87-191.4-191.4-191.4z m0 319.17a127.78 127.78 0 1 1 127.79-127.77A127.92 127.92 0 0 1 510.33 575z"  ></path>' +
    '' +
    '<path d="M813.69 589.06a332.67 332.67 0 0 0 31.9-141.79C845.58 262.4 695.18 112 510.33 112S175.08 262.4 175.08 447.27a332.65 332.65 0 0 0 33.4 144.91L108.67 761.8l152.27 33.28L364 912l80.08-136.11a333.51 333.51 0 0 0 135.49-0.64L660 912l103-116.92 152.33-33.28z m-460 215.06l-58.8-66.71-86.9-19 38.36-65.2a336.74 336.74 0 0 0 135.22 103.52z m156.64-85.19c-149.78 0-271.64-121.86-271.64-271.66s121.86-271.66 271.64-271.66S782 297.47 782 447.27 660.11 718.92 510.33 718.92z m218.78 18.47l-58.8 66.71-28.53-48.49a336.83 336.83 0 0 0 134.4-104.91L816 718.4z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)