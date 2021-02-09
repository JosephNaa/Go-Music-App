package main

import (
	"log"

	"github.com/JosephNaa/Go-Music-App/backend/src/rest"
)

func main() {
	log.Println("Main log....")
	rest.RunAPI(":9090")
}
