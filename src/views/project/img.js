import sales1 from '@/assets/img/sales/sales1.png'
import sales2 from '@/assets/img/sales/sales2.png'
import sales3 from '@/assets/img/sales/sales3.png'
import sales4 from '@/assets/img/sales/sales4.png'
import sales5 from '@/assets/img/sales/sales5.png'
import dpm1 from '@/assets/img/dpm/dpm1.png'
import dpm2 from '@/assets/img/dpm/dpm2.png'
import dpm3 from '@/assets/img/dpm/dpm3.png'
import dpm4 from '@/assets/img/dpm/dpm4.png'
import dpm5 from '@/assets/img/dpm/dpm5.png'
import dpm6 from '@/assets/img/dpm/dpm6.png'
import dpm7 from '@/assets/img/dpm/dpm7.png'
import dpm8 from '@/assets/img/dpm/dpm8.png'

import { ref } from 'vue'
export default function useImage() {
  const salesInages = ref([sales1, sales2, sales3, sales4, sales5])
  const dmpImages = ref([dpm1, dpm2, dpm3, dpm4, dpm5, dpm6, dpm7, dpm8])

  return {
    salesInages,
    dmpImages
  }
}
