import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lpService } from 'src/app/service/lp-service.service';

@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.css']
})
export class InscricaoComponent implements OnInit {

  inscricaoForm: FormGroup;
  formSubmitted: boolean = false;
  sucesso: boolean = false;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private lpService: lpService) {

  }

  ngOnInit(): void {
    this.inscricaoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      cep: ['', [Validators.required, Validators.maxLength(8)]],
      endereco: ['', Validators.required],
      bairro: ['', Validators.required],
      complemento: [''],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
    })
  }

  get registerFormControl() {
    return this.inscricaoForm.controls;
  }

  inscrever() {
    if (this.inscricaoForm.valid) {
      this.loading = true;
      setTimeout(() => {
        console.log(this.inscricaoForm.value)
        this.sucesso = true;
        this.loading = false;
      }, 1000);
    } else {
      this.formSubmitted = true;
    }

  }

  public buscaEnderecoByCEP(cep: String): void {
    this.lpService.getCep(cep).subscribe((data: any) => {
      console.log(data)
      this.inscricaoForm.patchValue({
        endereco: data.logradouro,
        bairro: data.bairro,
        cidade: data.localidade,
        estado: data.uf,
      });
    });
  }

}
