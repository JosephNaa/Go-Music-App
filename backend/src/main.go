package main

import (
	"log"

	"goMusic/backend/src/rest"
)

func main() {
	log.Println("Main log....")
	rest.RunAPI(":8000")
}
