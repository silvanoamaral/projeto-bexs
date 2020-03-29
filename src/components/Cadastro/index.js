import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import ReactSelect from 'react-select'
import {
  TextField,
} from "@material-ui/core"

import './Cadastro.scss'

const options =  [
  { value: "1", label: "1x R$ 1.000,00 sem juros" },
  { value: "2", label: "2x R$ 2.000,00 sem juros" },
  { value: "3", label: "3x R$ 3.000,00 sem juros" }
]

const Cadastro = () => {
  const { handleSubmit, errors, control } = useForm()
  const onSubmit = data => { console.log(data) }

  return <form onSubmit={handleSubmit(onSubmit)} className="form" autoComplete="off">

    <div className={`form__group ${errors.number_card ? 'has-error' : '' }`}>
      <Controller as={TextField} fullWidth defaultValue="" name="number_card" label="Número do Cartão" rules={{ required: true }} control={control} />
      {errors.number_card &&
        <div className="form__group-error">Número de cartão inválido</div>
      }
    </div>

    <div className={`form__group ${errors.name_card ? 'has-error' : '' }`}>
      <Controller as={TextField} fullWidth defaultValue="" name="name_card" label="Nome (igual ao cartão)" rules={{ required: true }} control={control} />
      {errors.name_card &&
        <div className="form__group-error">Insira seu nome completo</div>
      }
    </div>

    <div className="grid">
      <div className={`form__group ${errors.validity_card ? 'has-error' : '' }`}>
        <Controller as={TextField} fullWidth defaultValue="" name="validity_card" label="Validade" rules={{ required: true }} control={control} />
        {errors.validity_card &&
          <div className="form__group-error">Data inválida</div>
        }
      </div>

      <div className={`form__group ${errors.cvv_card ? 'has-error' : '' }`}>
        <Controller as={TextField} fullWidth defaultValue="" name="cvv_card" label="CVV" rules={{ required: true }} control={control} />
        {errors.cvv_card &&
          <div className="form__group-error">Código inválido</div>
        }
      </div>
    </div>

    <div className={`form__group ${errors.parcel ? ' has-error' : '' }`}>
      <Controller
        as={ReactSelect}
        options={options}
        name="parcel"
        isClearable
        control={control}
        placeholder="Número de parcelas"
        rules={{ required: true }}
      />
      {errors.parcel &&
        <div className="form__group-error">Insira o número de parcelas</div>
      }
    </div>

    <input type="submit" className="btn__submit" value="Continuar" />
  </form>
}

export default Cadastro