package main

import (
	"encoding/json"
	"fmt"
    "net/http"
	"strconv"
)

type Person struct {
	Name string
	Age int
}

func main() {

    http.HandleFunc("/", hello)
    http.HandleFunc("/personCreate", personCreate)

    http.ListenAndServe(":8080", nil)
}

func hello(w http.ResponseWriter, req *http.Request) {
	w.Write([]byte("Hello Go!"))
}

func personCreate(w http.ResponseWriter, req *http.Request) {
	var p Person
	err := json.NewDecoder(req.Body).Decode(&p)
	if err != nil {
		fmt.Println("Error: ", err)
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	fmt.Println("Got person: ", p)
	w.Write([]byte(p.Name + " is " + strconv.Itoa(p.Age) + " years old"))
}
