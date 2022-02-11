import cv2
import sys
import urllib.request
a=sys.argv;
image = cv2.imread(a[1])    # [ARPAN] "Resources/mita.png"--> Input image path
imGray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
invet = cv2.bitwise_not(imGray)
blur = cv2.GaussianBlur(invet,(21,21),0)    # Must be odd number
invertBlue = cv2.bitwise_not(blur)

sketch = cv2.divide(imGray, invertBlue, scale=270.0)  #[ARPAN] sketch is the final image output which will store

# cv2.imshow("Image",image)

    # [ARPAN] "Sketch.png"--> This is the image name with formate, and the image variable
cv2.imwrite(a[2],sketch)  # By Using this we can directly save the image within the project folder of Desktop

# cv2.imshow("Sketch",sketch)
# cv2.imshow("Sketch",imGray)
# print(imGray)
# cv2.waitKey(0)
