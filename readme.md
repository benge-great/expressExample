# Express Example

---

## 1. 安装依赖
~~~sh
npm i
~~~

## 2. 启动数据库

~~~sh
docker run --name pgREG -e POSTGRES_PASSWORD=123456 -p 5432:5432 -d postgres
node init
~~~

## 3. 启动服务

~~~sh
node app
~~~

或者按 F5
