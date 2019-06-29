package main

import (
	"log"
	"net/http"

	"github.com/trevex/golem"
)

var (
	matchingQueue = MakeQueue()
)

func main() {
	http.HandleFunc("/", createRouter().Handler())
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func createRouter() *golem.Router {
	router := golem.NewRouter()
	router.On("join_matching", joinMatching)

	return router
}

func joinMatching(connection *golem.Connection, data *joinMatchingMessage) {
	println(data.ID)
	connection.Emit("echo", "joined")
}

type joinMatchingMessage struct {
	ID string `json:"id"`
}
