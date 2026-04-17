import pymysql
conn = pymysql.connect(host='localhost',port=3306,user='root',password='',db='amazon')
a = conn.cursor()
client = input("Enter customer name you want to update: ")
sql = "update customer set bill = 70000 where cust_name = '" + client + "'"
print(sql)
a.execute(sql)
conn.commit()