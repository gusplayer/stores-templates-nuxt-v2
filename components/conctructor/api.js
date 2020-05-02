import axios from 'axios'

const BASE_API = 'https://components.komercia.co/'

// Tipos de componentes - Categorias
class Api {
  ACCESS_TOKEN =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRjY2FhYjljN2U5MjU0MDRkZDA3YWUwYTkxYmI1NTYzYjA0NzU1ZmEyZTZlODE5MTVkNDBkMWU1MjI3YTAxMDQwMTZmMDYwMTk5OGNjNjEzIn0.eyJhdWQiOiIxIiwianRpIjoiZGNjYWFiOWM3ZTkyNTQwNGRkMDdhZTBhOTFiYjU1NjNiMDQ3NTVmYTJlNmU4MTkxNWQ0MGQxZTUyMjdhMDEwNDAxNmYwNjAxOTk4Y2M2MTMiLCJpYXQiOjE1NzUzMjIzNzksIm5iZiI6MTU3NTMyMjM3OSwiZXhwIjoxNjA2OTQ0Nzc5LCJzdWIiOiI3Iiwic2NvcGVzIjpbXX0.fZ5FY1Z3jbqeHeR4yo32vg0KLfY7mlDFXo2EdRdPeG4R44tsLksvqDGT_TDdSsS9cDVADjRDZlXFldbriOG36vXi7zFD1iuHS-8FzW1pbZJL8d4ZYpfPdrn3sY32GfInXZtDmpeexKGeulTmrmpqdiB2LF7b9HBFWAXD493gA3WJ4Xa7Qux1LyGkPeWVAWtP_eHsXxHa7jMKxyYis8NDm3SOG9gIfJ3HoE0CgPvJ7WmK9Flx841f74h0IG1cn-auoaakkw0I5dMi8Q2vhU_LRYX-vinErBj93fZiD9JO3VvQ26PQK6NkZQezGbUljO4XU-V370d6uW756XxsGQ6tzCrL5UhNgdbqHAUO5p3EzGdvwmAiZdWgF_DP0L-JE0F3gsXhm_wBuvpFVlZ9vNwSnWHoSXusFWOU1yzn3ETpvyHgu1vuTYAgLkngodD-4zJb0Q3WICw4kVnteXGamfDdtMkzULIW2x5aKUrsEB2lzPNAnzJk4XkmnizHy2CbAn7PaOp_MLIJexdakPnPfqK3faPwnX8UqXShm8EP5TkC-K8NnJMC_zm7f2Pj18ErLgm_ao6Rupa14iYaNyT8VoTZsmHOax1uJ8qXjrIxsY5rLDf24Zp5fkXGe-ND07IRh1SgA-HzDAl5DZ5Ogfjy3eivRlFnl1G3Fo83dTmk6RW5weo'

  async getTipoComponente() {
    const tipoComponentes = await axios
      .get(`${BASE_API}api/components/types`, {
        headers: {
          Authorization: `Bearer ${this.ACCESS_TOKEN}`
        }
      })
      .then(response => {
        return response.data.data
      })
      .catch(error => error)
    return tipoComponentes
  }

  //Componentes por cada categoria
  async getReferenciasComponente(idTipo) {
    const componentes = await axios
      .get(`${BASE_API}api/components/references/${idTipo}`, {
        headers: {
          Authorization: `Bearer ${this.ACCESS_TOKEN}`
        }
      })
      .then(response => {
        return response.data.data
      })
      .catch(error => error)
    return componentes
  }
}

export default new Api()
