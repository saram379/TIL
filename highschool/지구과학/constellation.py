'''
RA: 적경
con_name: 별자리 이름
ag_ 붙은건 각도를 의미
15를 곱하는것은 1h=15도 이기 때문
적경이 0시일 때를 맨 위로 잡고 그곳을 0도로 해 반시계방향으로 커지게 설정함
when에 관련된 것은 태양의 위치와 관련된 것임 e.g. 춘분날 태양(12시)은 0h에 위치하니까 180도 차이남
그 시간에서의 각도를 구분해 서쪽, 남쪽 등등 설정(쉽게 바꿀 수 있다)
'''
constellation = int(input("별자리의 번호를 입력해주세요\n1. 물고기\n2. 양\n3. 황소\n4. 쌍둥이\n5. 게\n6. 사자\n7. 처녀\n8. 천칭\n9. 전갈\n10. 궁수\n11. 염소\n12. 물병\n"))
if constellation == 1:
    con_name = '물고기자리'
    RA = 0.85
elif constellation == 2:
    con_name = '양자리'
    RA = 2.66
elif constellation == 3:
    con_name = '황소자리'
    RA = 4.27
elif constellation == 4:
    con_name = '쌍둥이자리'
    RA = 7.19
elif constellation == 5:
    con_name = '게자리'
    RA = 8.69
elif constellation == 6:
    con_name = '사자자리'
    RA = 10.66
elif constellation == 7:
    con_name = '처녀자리'
    RA = 13.21
elif constellation == 8:
    con_name = '천칭자리'
    RA = 15.21
elif constellation == 9:
    con_name = '전갈자리'
    RA = 16.99
elif constellation == 10:
    con_name = '궁수자리'
    RA = 19.11
elif constellation == 11:
    con_name = '염소자리'
    RA = 20.50
elif constellation == 12:
    con_name = '물병자리'
    RA = 22.71
else:
    print("올바른 번호를 입력해주세요")

when = int(input("해당하는 절기의 번호를 입력해주세요. \n 1. 춘분날 \n 2. 하짓날 \n 3. 추분날 \n 4. 동짓날\n"))
if when == 1:
    ag_season = 180 
elif when == 2:
    ag_season = 90
elif when == 3:
    ag_season = 0
elif when == 4:
    ag_season = 270
else:
    print("올바른 번호를 입력해주세요")

time = int(input("관측시간은 언제인가요? \n 24시 단위로 숫자만 작성해주세요\n"))

ag_time = ag_season - time*15

ag_RA = RA*15

if ag_time - 90 <= ag_RA < ag_time - 80:
    print(con_name, "은", time, "시에 서쪽하늘에서 관측 할 수 있어요")
elif ag_time - 80 <= ag_RA < ag_time - 10:
    print(con_name, "은", time, "시에 남서쪽하늘에서 관측 할 수 있어요")
elif ag_time - 10 <= ag_RA < ag_time + 10:
    print(con_name, "은", time, "시에 남쪽하늘에서 관측 할 수 있어요")
elif ag_time + 10 <= ag_RA < ag_time + 80:
    print(con_name, "은", time, "시에 남동쪽하늘에서 관측 할 수 있어요")
elif ag_time + 80 <= ag_RA < ag_time +90:
    print(con_name, "은", time, "시에 동쪽하늘에서 관측 할 수 있어요")
else:
    print("오류입니다")