docker run --name postgres -v /opt/postgres/data:/var/lib/postgresql/data -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
