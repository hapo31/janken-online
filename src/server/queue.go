package main

type queue struct {
	Data []interface{}
}

func MakeQueue() queue {
	return queue{
		Data: make([]interface{}, 0),
	}
}

func Enqueue(source *queue, value interface{}) *queue {
	source.Data = append(source.Data, value)
	return source
}

func Dequeue(source *queue) interface{} {
	data := source.Data[0]
	source.Data = source.Data[1:]

	return data
}

func LenQueue(source *queue) int {
	return len(source.Data)
}
