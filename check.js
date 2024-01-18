class main {
    info() {
        let a = "hello"
        console.log(a + " main")
    }
}
class child extends main {
    info() {
        console.log(a + " hello innher")
    }
}
 

