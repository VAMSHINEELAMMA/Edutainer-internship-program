import pymysql
conn = pymysql.connect( host='localhost', port=3306,user='root', password='',db='amazon')
a = conn.cursor()
myquery = "select * from customer"
a.execute(myquery)
data = a.fetchall()
print(data)