import matplotlib.pyplot as plt

circle_center=(0,0)
circle_radius=7.5
star_center=(3,3)#나중에 식을 집어 넣어야함
star_radius=7
#fc(색 채우기): 흰색, ec(둘레): 파란색
celestial=plt.Circle(circle_center, circle_radius, fc='b',ec='b')
star=plt.Circle(star_center, 0.3, fc='y')
star_line=plt.Circle(circle_center, star_radius, ec='y', fill=False)

a=plt.axes(xlim=(-10,10), ylim=(0,10))    #축설정
a.add_patch(celestial)        #원의 객체 c를 패치
a.add_patch(star)
a.add_patch(star_line)
a.set_aspect('equal') #X, Y축 1:1 비율로 설정

plt.show()

