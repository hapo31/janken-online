package main

import (
	"log"
	"net/http"

	"github.com/trevex/golem"
)

func main() {
	http.HandleFunc("/ws", createRouter().Handler())
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func createRouter() *golem.Router {
	router := golem.NewRouter()
	router.On("join_matching")

	return router
}
