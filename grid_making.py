"""     Grid Drawing on a image  """

import cv2
import PIL.Image
import sys;
a=sys.argv;
# img = cv2.imread("Resources/mita.png")      # NOTE: Taking the image input. "Resources/mita.png"-> Path of the image [ARPAN]
img = cv2.imread(a[1]);
# cv2.imshow("Out put",img)

img_size = PIL.Image.open(a[1])     # PIL-> Python Image libary
width, height = img_size.size
print(width, height)        # 820  518

    # Grid Line drawing
for i in range(30,width,30):      # Devided the full width (i.e. 820) 30 is the equal distance
    cv2.line(img,(i,0),(i,height),(0,0,255))
for i in range(30,height,30):      # Devided the full height (i.e. 518) 30 is the equal distance
    cv2.line(img,(0,i),(width,i),(0,0,255))

cv2.imwrite(a[2],img)
# NOTE: img is the Output image  [ARPAN]
#cv2.imshow("Out_put",img)       # Show the image output in a window named as "Out_put"
#cv2.waitKey(0)
