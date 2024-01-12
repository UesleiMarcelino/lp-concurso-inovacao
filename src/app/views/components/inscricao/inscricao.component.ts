import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.css']
})
export class InscricaoComponent implements OnInit {

  inscricaoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.inscricaoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      // ... outros campos e validações
    });
  }

  ngOnInit(): void {
  }

  inscrever() {
    if (this.inscricaoForm.valid) {
      // Lógica para processar a inscrição
      console.log('Formulário enviado!');
    }
  }

}
