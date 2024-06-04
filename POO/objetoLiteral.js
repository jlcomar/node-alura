const user = {
    nome: "ugauga",
    email: "uga@uga.com",
    nascimento: "2021/01/01",
    role: "estudante",
    ativo: true, 
    exibirInfos: function () {
        console.log(this.nome, this.email, this.role)
    }

}

const admin = {
    nome: "calopsita",
    email: "pew@pew.com",
    role: "admin",
    criarCurso() {
        console.log("Curso criado com sucesso")
    }

}

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();

// const exibir = user.exibirInfos.bind(user)
// exibir();