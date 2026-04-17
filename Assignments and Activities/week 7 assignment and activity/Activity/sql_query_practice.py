import pymysql
conn = pymysql.connect(host='localhost',port=3306,user='root',password='',db='products')
a = conn.cursor()
sql = "SELECT * FROM Products;"
a.execute(sql)
records = a.fetchall()
print("All records from Products table:")
for row in records:
    print(row)
conn.close()
