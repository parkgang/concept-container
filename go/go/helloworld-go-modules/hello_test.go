package hello

import (
	"fmt"
	"testing"
)

func TestHello(t *testing.T) {
	want := "안녕, 세상."
	fmt.Println(want)
	if got := Hello(); got != want {
		t.Errorf("Hello() = %q, want %q", got, want)
	}
}
func TestProverb(t *testing.T) {
	want := "Concurrency is not parallelism."
	if got := Proverb(); got != want {
		t.Errorf("Proverb() = %q, want %q", got, want)
	}
}
