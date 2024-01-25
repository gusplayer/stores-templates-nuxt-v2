<template>
  <el-drawer
    :visible.sync="openOrder"
    direction="rtl"
    :with-header="false"
    :modal-append-to-body="false"
    class="width-drawer"
  >
    <!-- <transition name="fade"> -->
    <div @click="closeOrder" class="relative">
      <div class="order_content">
        <div class="order_header">
          <h3>{{ $t('footer_title') }} ({{ cantidadProductos }})</h3>
          <div class="order_header_close" @click="closedOder">
            <div class="leftright"></div>
            <div class="rightleft"></div>
          </div>
        </div>
        <transition name="slide">
          <template v-if="productsCart.length">
            <div class="order--wrapper">
              <div class="order_products">
                <ul class="order_products_list">
                  <li
                    v-for="(product, index) in productsCart"
                    :key="index"
                    class="order_products_list_item"
                  >
                    <img
                      v-lazy="idCloudinary(product.foto_cloudinary, 150, 150)"
                      alt="Product Img"
                      class="img_product"
                    />
                    <div class="w-full flex flex-col">
                      <div class="name">
                        <p class="order-text font-bold">
                          {{ product.nombre | capitalize }}
                        </p>
                        <span v-if="product.precio">
                          <b class="unidades">
                            {{ $t('cart_cantidad') }} {{ product.cantidad }}
                          </b>
                          <b class="unidades">
                            X{{
                              product.precio
                                | currency(
                                  dataStore.tiendasInfo.paises.codigo,
                                  dataStore.tiendasInfo.moneda
                                )
                            }}
                          </b>
                        </span>
                        <div
                          class="w-full flex flex-col justify-center items-start mb-5"
                        >
                          <div
                            class="flex flex-row relative box-border content-quantity"
                          >
                            <button
                              class="bg-transparent quantity_remove"
                              @click="removeQuantity(product)"
                            >
                              <menos-icon class="icon-quantity" />
                            </button>
                            <p
                              class="flex items-center justify-center bg-transparent quantity_value"
                            >
                              {{ product.cantidad }}
                            </p>
                            <button
                              class="bg-transparent quantity_add"
                              @click="addQuantity(product)"
                            >
                              <mas-icon class="icon-quantity" />
                            </button>
                            <div
                              v-if="product.limitQuantity == product.cantidad"
                              class="container-alerta"
                            >
                              <span class="alerta">
                                {{ $t('cart_ultimaUnidad') }}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          v-if="product.combinacion"
                          class="grid grid-flow-col auto-cols-max mb-5"
                        >
                          <el-tag
                            v-for="(
                              productCombinacion, index2
                            ) in product.combinacion"
                            :key="index2"
                          >
                            {{ productCombinacion | capitalize }}
                          </el-tag>
                        </div>
                        <el-tag
                          v-if="product.activo == 0"
                          type="danger"
                          style="background-color: rgb(223, 62, 62)"
                        >
                          Producto agotado!
                        </el-tag>
                        <el-tag
                          v-if="product.stock_disponible == 0"
                          type="danger"
                          style="background-color: rgb(223, 62, 62)"
                        >
                          ¡No tiene las unidades disponibles!
                        </el-tag>
                      </div>
                    </div>
                    <div v-if="product.precio > 0" class="price">
                      <p>
                        {{
                          (product.precio * product.cantidad)
                            | currency(
                              dataStore.tiendasInfo.paises.codigo,
                              dataStore.tiendasInfo.moneda
                            )
                        }}
                      </p>
                    </div>
                    <div v-else class="price"></div>
                    <boteBasura-icon
                      class="icon-delete"
                      @click="deleteItemCart(index)"
                    />
                  </li>
                </ul>
              </div>
              <div class="h-full flex flex-col justify-end">
                <div class="w-full flex justify-center items-center">
                  <div
                    class="w-full flex flex-row justify-center items-center text-center cursor-pointer content-remove-cart"
                    @click="remove = !remove"
                  >
                    <cart-icon class="header-icon-cart" />
                    <p>
                      {{ $t('footer_vaciarCarrito') }}
                    </p>
                  </div>
                </div>
                <div class="order_total">
                  <span class="order_total_domicile">
                    <p style="font-weight: bold; font-size: 16px">
                      {{ $t('footer_costoDomicilio') }}
                    </p>
                    <details
                      v-if="
                        rangosByCiudad.envio_metodo === 'precio_ciudad' &&
                        shippingCities.length > 0 &&
                        !getFreeShipping &&
                        !FreeShippingCart
                      "
                    >
                      <summary class="text-color">
                        {{ $t('footer_valorCiudad') }}
                      </summary>
                      <section>
                        <ol class="scroll_cart_summary_items_cities">
                          <li
                            v-for="(ciudad, index) in rangosByCiudad.rangos"
                            :key="ciudad.id"
                          >
                            <div v-if="ciudad.price > 0">
                              <b>
                                {{
                                  shippingCities[index].nombre_ciu ===
                                  'Sin especificar'
                                    ? 'Resto del país'
                                    : shippingCities[index].nombre_ciu
                                }}:
                              </b>
                              <p>
                                {{
                                  ciudad.price
                                    | currency(
                                      dataStore.tiendasInfo.paises.codigo,
                                      dataStore.tiendasInfo.moneda
                                    )
                                }}
                              </p>
                            </div>
                          </li>
                        </ol>
                      </section>
                    </details>
                    <div
                      v-else-if="
                        rangosByCiudad.envio_metodo === 'tarifa_plana' &&
                        shipping > 0 &&
                        getFreeShipping &&
                        !FreeShippingCart
                      "
                    >
                      <li class="text-color list-none">
                        {{ $t('footer_tarifaPlana') }}
                        {{
                          rangosByCiudad.valor
                            | currency(
                              dataStore.tiendasInfo.paises.codigo,
                              dataStore.tiendasInfo.moneda
                            )
                        }}
                      </li>
                    </div>
                    <div
                      v-else-if="
                        rangosByCiudad.envio_metodo === 'precio' &&
                        getFreeShipping &&
                        !FreeShippingCart
                      "
                    >
                      <div v-if="shippingTarifaPrecio > 0">
                        <p class="text-color">
                          {{
                            shippingTarifaPrecio
                              | currency(
                                dataStore.tiendasInfo.paises.codigo,
                                dataStore.tiendasInfo.moneda
                              )
                          }}
                        </p>
                      </div>
                      <p
                        v-else-if="shippingTarifaPrecio >= 0"
                        class="text-color"
                      >
                        {{ $t('footer_tarifaPrecio') }}
                      </p>
                      <p v-else class="text-TarifaPrecio">
                        {{ $t('footer_encioNoconfig') }}
                      </p>
                    </div>
                    <p
                      v-else-if="
                        rangosByCiudad.envio_metodo === 'gratis' &&
                        shippingCities.length <= 0 &&
                        !getFreeShipping &&
                        !FreeShippingCart
                      "
                      class="without_shipping_cost"
                    >
                      {{ $t('footer_encioGratis') }}
                    </p>
                    <p
                      v-else-if="
                        rangosByCiudad.envio_metodo === 'sintarifa' &&
                        shippingCities.length <= 0 &&
                        !getFreeShipping &&
                        !FreeShippingCart
                      "
                      class="without_shipping_cost"
                    >
                      {{ $t('footer_enviosPorPagar') }}
                    </p>
                    <p
                      v-else-if="
                        rangosByCiudad.envio_metodo === 'sinEnvio' &&
                        shippingCities.length <= 0 &&
                        !getFreeShipping
                      "
                      class="without_shipping_cost"
                    >
                      Pasas a recoger tu compra
                    </p>
                    <p
                      v-else-if="FreeShippingCart"
                      class="without_shipping_cost"
                    >
                      {{ $t('footer_tarifaPrecio') }}
                    </p>
                  </span>
                  <span v-if="discountDescuentos" class="order_total_net">
                    <p>{{ $t('footer_descuento') }}</p>
                    <p>
                      -
                      {{
                        discountDescuentos
                          | currency(
                            dataStore.tiendasInfo.paises.codigo,
                            dataStore.tiendasInfo.moneda
                          )
                      }}
                    </p>
                  </span>
                  <span class="order_total_net">
                    <p>{{ $t('cart_subtotal') }}</p>
                    <p>
                      {{
                        totalCart
                          | currency(
                            dataStore.tiendasInfo.paises.codigo,
                            dataStore.tiendasInfo.moneda
                          )
                      }}
                    </p>
                  </span>
                  <span class="order_total_net">
                    <p>{{ $t('footer_totalPagar') }}</p>
                    <p>
                      {{
                        (totalCart +
                          (shipping ? shipping : 0) +
                          (shippingTarifaPrecio &&
                          shippingTarifaPrecio != 'empty' &&
                          !FreeShippingCart
                            ? shippingTarifaPrecio
                            : 0) -
                          discountDescuentos)
                          | currency(
                            dataStore.tiendasInfo.paises.codigo,
                            dataStore.tiendasInfo.moneda
                          )
                      }}
                    </p>
                  </span>
                </div>
                <div class="content-button">
                  <!-- no tiene cobertura de pais, compra por whatsApp -->
                  <div
                    v-if="
                      isQuotation() ||
                      (!countryStore &&
                        productsCart.length &&
                        dataStore.estado == 1)
                    "
                    class="wrapper-Quotation"
                  >
                    <p class="Quotation-message">
                      {{ $t('footer_contactoMgs') }}
                    </p>
                    <button
                      v-if="
                        !stateOrderWapi &&
                        expiredDate(dataStore.fechaExpiracion)
                      "
                      class="continue_shopping_whatsapp"
                      @click="modalBehaviorWhatsApp(true)"
                    >
                      <whatsapp-icon class="wp-icon" />
                      {{ $t('footer_compraWhatsapp') }}
                    </button>
                  </div>
                  <!-- rango de domicilio no configurado -->
                  <p
                    v-if="
                      productsCart.length &&
                      shippingTarifaPrecio == 'empty' &&
                      estadoShippingTarifaPrecio
                    "
                    class="domicilio-message"
                  >
                    {{ $t('footer_contactoMgs2') }}
                  </p>
                  <!-- tienda cerrada -->
                  <p v-if="dataStore.estado == 0" class="Quotation-message">
                    {{ $t('footer_tiendaCerrada') }}
                  </p>
                  <!-- <p class="Quotation-message" v-if="verifyProducts == 0">
                    {{ $t('cart_limitProductos') }}
                  </p> -->
                  <!-- <p class="Quotation-message" v-if="!stateModalPwd">
                    {{ $t('footer_tiendaPwd') }}
                  </p> -->
                  <!-- limite de productos para comprar -->
                  <p
                    v-if="!IsMinValorTotal() && productsCart.length"
                    class="Quotation-message"
                  >
                    {{ $t('cart_minimovalorProductos1') }}
                    {{
                      dataStore.tiendasInfo.valorCompraMinimo
                        | currency(
                          dataStore.tiendasInfo.paises.codigo,
                          dataStore.tiendasInfo.moneda
                        )
                    }}
                    {{ $t('cart_minimovalorProductos2') }}
                  </p>
                  <!-- ir al checkout -->
                  <button
                    v-if="
                      !stateOrderWapi &&
                      productsCart.length &&
                      !isQuotation() &&
                      dataStore.estado == 1 &&
                      !estadoShippingTarifaPrecio &&
                      countryStore &&
                      IsMinValorTotal() &&
                      expiredDate(dataStore.fechaExpiracion)
                    "
                    id="InitiateCheckoutTag"
                    class="continue_shopping"
                    @click="GoPayments"
                  >
                    {{ $t('footer_finalizarCompra') }}
                  </button>
                  <!-- ir al checkout whatsApp -->
                  <button
                    v-if="
                      stateOrderWapi &&
                      productsCart.length &&
                      !isQuotation() &&
                      dataStore.estado == 1 &&
                      !estadoShippingTarifaPrecio &&
                      countryStore &&
                      IsMinValorTotal() &&
                      settingByTemplate.pago_online == 1 &&
                      expiredDate(dataStore.fechaExpiracion)
                    "
                    id="InitiateCheckoutTag"
                    class="continue_shopping2"
                    :style="`color: ${
                      settingByTemplate && settingByTemplate.color_primario
                        ? settingByTemplate.color_primario
                        : '#25D366'
                    }; border:2px solid ${
                      settingByTemplate && settingByTemplate.color_primario
                        ? settingByTemplate.color_primario
                        : '#25D366'
                    };`"
                    @click="GoPayments"
                  >
                    {{ $t('footer_finalizarCompra') }}
                  </button>
                  <!-- Comprar whatsApp -->
                  <button
                    v-if="
                      stateOrderWapi &&
                      productsCart.length &&
                      !isQuotation() &&
                      IsMinValorTotal() &&
                      dataStore.estado == 1 &&
                      dataStore.redes.whatsapp &&
                      expiredDate(dataStore.fechaExpiracion)
                    "
                    class="continue_shopping_whatsapp"
                    :style="`background: ${
                      settingByTemplate && settingByTemplate.color_primario
                        ? settingByTemplate.color_primario
                        : '#25D366'
                    }; color:${
                      settingByTemplate && settingByTemplate.color_secundario
                        ? settingByTemplate.color_secundario
                        : '#FFFFFF'
                    };
                  border:2px solid ${
                    settingByTemplate && settingByTemplate.color_primario
                      ? settingByTemplate.color_primario
                      : '#25D366'
                  };                  
                  `"
                    @click="modalBehaviorWhatsApp(true)"
                  >
                    <whatsapp-icon class="wp-icon" />
                    {{ $t('footer_pedidoWhatsapp') }}
                  </button>
                  <!-- seguir comprando, cerrar order -->
                  <nuxt-link
                    v-if="!stateOrderWapi"
                    class="conten-btn"
                    :to="setUrlCloseOrder"
                    @click="closeOrder"
                  >
                    <p class="continue_shopping2">
                      {{ $t('footer_seguirCompra') }}
                    </p>
                  </nuxt-link>
                  <!-- ir al carrito componente -->
                  <!-- <nuxt-link
                    to="/cart"
                    class="conten-btn"
                    @click="closeOrder"
                    v-if="
                      !stateOrderWapi &&
                      (dataStore.template != 12 ||
                        dataStore.template != 99)
                    "
                  >
                    <button class="continue_shopping2">
                      {{ $t('footer_irCarrito') }}
                    </button>
                  </nuxt-link> -->
                </div>
              </div>
            </div>
          </template>
          <div v-else class="order--wrapper">
            <div class="w-full flex flex-col justify-center items-center">
              <img
                src="../../../assets/img/icono_cesta.png"
                style="width: 220px"
                class="object-cover object-bottom"
                alt="Product img"
              />
              <p class="text-empty">{{ $t('footer_carritoVacio2') }}</p>
              <p class="text-empty2">
                {{ $t('footer_carritoVacio3') }}
              </p>
            </div>
            <div>
              <nuxt-link
                class="conten-btn"
                :to="setUrlCloseOrder"
                @click="closeOrder"
              >
                <p class="continue_shopping2">
                  {{ $t('footer_seguirCompra') }}
                </p>
              </nuxt-link>
              <!-- <nuxt-link
                to="/cart"
                class="conten-btn"
                @click="closeOrder"
                v-if="dataStore.template != 12"
              >
                <button class="continue_shopping2">
                  {{ $t('footer_irCarrito') }}
                </button>
              </nuxt-link> -->
            </div>
          </div>
        </transition>
      </div>
      <div v-if="remove" class="wrapper-items-remove">
        <div class="content-items-remove">
          <p class="text-remove">
            {{ $t('footer_contactoMgs3') }}
          </p>
          <div class="content-btn-remove">
            <button @click="remove = !remove" class="btn-remover-no">
              {{ $t('footer_noCart') }}
            </button>
            <button class="btn-remover-yes" @click="removeCartItems">
              {{ $t('footer_siCart') }}
            </button>
          </div>
        </div>
      </div>
      <div v-if="formOrdenWhatsAPP" class="wrapper-items-form">
        <div class="content-items-form">
          <p class="form-text">{{ $t('footer_formtittle') }}</p>
          <ValidationObserver
            v-if="
              (inputCheckoutWPP && inputCheckoutWPP.length === 0) ||
              inputCheckoutWPP === null ||
              inputCheckoutWPP === undefined
            "
            ref="observer"
            tag="form"
            class="items-form"
          >
            <p class="form-subtext">{{ $t('footer_formNombre') }}</p>
            <validation-provider
              name="nombre"
              rules="required"
              class="content-input"
            >
              <template slot-scope="{ errors }">
                <input
                  id="ContactName"
                  v-model="form.nombre"
                  name="nombre"
                  type="text"
                  class="input-text"
                  :placeholder="$t('footer_formNombreMgs')"
                  onkeypress="return ((event.charCode>96 && event.charCode<123) || (event.charCode>64 && event.charCode<91) || (event.charCode==32) || (event.charCode==241) || (event.charCode==209))"
                />
                <span v-if="errors[0]" class="text-error">
                  {{ errors[0] }}
                </span>
                <div v-else style="margin-bottom: 18px"></div>
              </template>
            </validation-provider>
            <p class="form-subtext">{{ $t('footer_formIdenti') }}</p>
            <validation-provider
              name="id"
              rules="required"
              class="content-input"
            >
              <template slot-scope="{ errors }">
                <input
                  id="ContactId"
                  v-model="form.phone"
                  name="id"
                  type="number"
                  class="input-text"
                  :placeholder="$t('footer_formIdentiMgs')"
                  onkeypress="return ((event.charCode>47 && event.charCode<58))"
                />
                <span v-if="errors[0]" class="text-error">
                  {{ errors[0] }}
                </span>
                <div v-else style="margin-bottom: 18px"></div>
              </template>
            </validation-provider>
            <p class="form-subtext">
              {{ $t('footer_formCorreo') }} ({{ $t('footer_norquerido') }})
            </p>
            <validation-provider name="email" class="content-input">
              <template slot-scope="{ errors }">
                <input
                  id="ContactEmail"
                  v-model="form.email"
                  name="email"
                  type="text"
                  class="input-text"
                  :placeholder="$t('footer_formCorreoMgs')"
                />
                <span v-if="errors[0]" class="text-error">
                  {{ errors[0] }}
                </span>
                <div v-else style="margin-bottom: 18px"></div>
              </template>
            </validation-provider>
            <p class="form-subtext">{{ $t('footer_formPhone') }}</p>
            <validation-provider
              name="phone"
              rules="required"
              class="content-input"
            >
              <template slot-scope="{ errors }">
                <input
                  id="ContactTelephone"
                  v-model="form.identificacion"
                  name="telephone"
                  type="text"
                  class="input-text"
                  :placeholder="$t('footer_formPhoneMgs')"
                  onkeypress="return ((event.charCode>47 && event.charCode<58))"
                />
                <span v-if="errors[0]" class="text-error">
                  {{ errors[0] }}
                </span>
                <div v-else style="margin-bottom: 18px"></div>
              </template>
            </validation-provider>
            <P class="form-subtext"> {{ $t(`${placeholderDepart}`) }}</P>
            <validation-provider
              name="ciudad"
              rules="required"
              class="content-input"
            >
              <template slot-scope="{ errors }">
                <input
                  v-model="form.ciudad"
                  class="input-text"
                  name="ciudad"
                  :placeholder="$t('footer_formBarrioMgs')"
                  onkeypress="return ((event.charCode>96 && event.charCode<123) || (event.charCode>64 && event.charCode<91) || (event.charCode==32) || (event.charCode==241) || (event.charCode==209))"
                />
                <span v-if="errors[0]" class="text-error">
                  {{ errors[0] }}
                </span>
                <div v-else style="margin-bottom: 18px"></div>
              </template>
            </validation-provider>
            <P class="form-subtext"> {{ $t(`${placeholderBarrio}`) }}</P>
            <validation-provider
              name="barrio"
              rules="required"
              class="content-input"
            >
              <template slot-scope="{ errors }">
                <input
                  v-model="form.barrio"
                  class="input-text"
                  name="barrio"
                  :placeholder="$t(`${placeholderMsgBarrio}`)"
                  onkeypress="return ((event.charCode>96 && event.charCode<123) || (event.charCode>64 && event.charCode<91) || (event.charCode==32) || (event.charCode==241) || (event.charCode==209))"
                />
                <span v-if="errors[0]" class="text-error">
                  {{ errors[0] }}
                </span>
                <div v-else style="margin-bottom: 18px"></div>
              </template>
            </validation-provider>
            <P class="form-subtext"> {{ $t('footer_formDireccion') }}</P>
            <validation-provider
              name="dirreccion"
              rules="required"
              class="content-input"
            >
              <template slot-scope="{ errors }">
                <input
                  v-model="form.dirreccion"
                  class="input-text"
                  name="dirreccion"
                  :placeholder="$t('footer_formDireccionMgs')"
                />
                <span v-if="errors[0]" class="text-error">
                  {{ errors[0] }}
                </span>
                <div v-else style="margin-bottom: 18px"></div>
              </template>
            </validation-provider>
          </ValidationObserver>
          <div v-else class="items-form">
            <ValidationObserver ref="observer" tag="form" class="w-full">
              <div
                v-for="(item, index) in inputCheckoutWPP"
                :key="index"
                class="w-full"
              >
                <label
                  class="form-subtext"
                  :class="item.requerid ? 'is-required' : ''"
                >
                  {{ item.textInput }}
                </label>
                <validation-provider class="content-input">
                  <template
                    slot-scope="{ errors }"
                    rules="required"
                    :name="item.id"
                  >
                    <input
                      :type="item.type"
                      :name="item.textInput"
                      v-model="item.value"
                      class="input-text"
                      :required="item.requerid ? true : false"
                    />
                    <span v-if="errors[0]" class="text-error">
                      {{ errors[0] }}
                    </span>
                    <div v-else style="margin-bottom: 18px"></div>
                  </template>
                </validation-provider>
              </div>
            </ValidationObserver>
          </div>
          <label
            for="order_close"
            class="form_close"
            @click="modalBehaviorWhatsApp(false)"
          >
            <close-icon />
          </label>
        </div>
        <button
          class="continue_shopping_form"
          :style="`background: ${
            settingByTemplate && settingByTemplate.color_primario
              ? settingByTemplate.color_primario
              : '#25D366'
          }; color:${
            settingByTemplate && settingByTemplate.color_secundario
              ? settingByTemplate.color_secundario
              : '#FFFFFF'
          };
          border:2px solid ${
            settingByTemplate && settingByTemplate.color_primario
              ? settingByTemplate.color_primario
              : '#25D366'
          };          
          `"
          style="margin-top: 15px"
          @click.prevent="setOrderWa()"
        >
          <whatsapp-icon class="wp-icon" /> {{ $t('footer_finalizarCompra') }}
        </button>
      </div>
      <div v-if="modalConfirmation" class="modal-confirmation">
        <p class="text-16">{{ textConfirmation }}</p>
        <div
          v-if="stateBtnConfirmation"
          class="flex flex-col justify-center items-center my-2"
        >
          <p class="text-14 text-red-500">
            Es importante enviar la información al whatsApp dueño.
          </p>
          <span class="text-14 text-gray-200 w-9/12 mt-3">
            Si no abre whatsApp escribirle al dueño de la tienda por tu numero
            de order: {{ numberOrder }}
          </span>
          <button
            class="continue_form_confirmation"
            :style="`background: ${
              settingByTemplate && settingByTemplate.color_primario
                ? settingByTemplate.color_primario
                : '#25D366'
            }; color:${
              settingByTemplate && settingByTemplate.color_secundario
                ? settingByTemplate.color_secundario
                : '#FFFFFF'
            };
          border:2px solid ${
            settingByTemplate && settingByTemplate.color_primario
              ? settingByTemplate.color_primario
              : '#25D366'
          };          
          `"
            style="margin-top: 15px"
            @click="redirectWP"
          >
            <whatsapp-icon class="wp-icon" /> Enviar información al WhatsApp
          </button>
        </div>
      </div>
    </div>
    <!-- </transition> -->
  </el-drawer>
</template>

<script>
import axios from 'axios'
import { mapState, mapGetters } from 'vuex'
import idCloudinary from '@/mixins/idCloudinary'
import currency from '@/mixins/formatCurrent'
import expiredDate from '@/mixins/expiredDate'
import mobileCheck from '@/mixins/mobileCheck'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
export default {
  name: 'KoOrderCart',
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  filters: {
    capitalize(value) {
      if (value) {
        value = value.toLowerCase()
        return value.replace(/^\w|\s\w/g, (l) => l.toUpperCase())
      }
    },
  },
  mixins: [idCloudinary, currency, expiredDate, mobileCheck],
  props: {
    dataStore: {
      type: Object,
      required: true,
    },
    stateOrderWapi: {
      type: Boolean,
      required: false,
      default: () => false,
    },
    quickSale: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },
  data() {
    return {
      // img: 'https://res.cloudinary.com/komerciaacademico/image/upload/v1583535445/komerciaAcademico/CARRITO_y2lbh6.png',
      shippingCities: [],
      // rangosByCiudad: [],
      remove: false,
      shippingTarifaPrecio: '',
      estadoShippingTarifaPrecio: false,
      // formOrden: false,
      form: {
        nombre: '',
        identificacion: '',
        phone: '',
        email: '',
        ciudad: '',
        barrio: '',
        dirreccion: '',
      },
      formStringify: '',
      FreeShippingCart: false,
      placeholderBarrio: 'footer_formBarrio',
      placeholderMsgBarrio: 'footer_formBarrioMgs',
      stateBtnConfirmation: false,
      textConfirmation: '!Generando orden de compra!',
      modalConfirmation: false,
      discountDescuentos: 0,
      stateProductCart: 1,
      textDepartment: '',
      textCiudad: '',
      numberOrder: null,
    }
  },
  computed: {
    ...mapState(['cities', 'totalCart', 'productsCart', 'checkoutWhatsApp']),
    ...mapGetters(['userDropshipping', 'locationStore', 'cantidadProductos']),
    ...mapState({
      layoutUniCentro: (state) => state.layoutUnicentro,
      facebookPixel: (state) => state.analytics_tagmanager,
    }),
    openOrder: {
      get() {
        return this.$store.state.openOrder
      },
      set(value) {
        this.$store.state.openOrder = value
      },
    },
    formOrdenWhatsAPP: {
      get() {
        return this.$store.state.formOrdenWhatsAPP
      },
      set(value) {
        this.$store.commit('SET_STATE_FORM_MODAL_WHATS_APP', value)
      },
    },
    shippingDescuento() {
      return this.$store.getters.listaDescuentosProductos
    },
    shippingDescuento2() {
      return this.$store.getters.listaDescuentosPrecio
    },
    getFreeShipping() {
      const freeMethods = ['tarifa_plana', 'precio']
      return freeMethods.includes(this.rangosByCiudad.envio_metodo)
    },
    rangosByCiudad() {
      return this.$store.state.envios.valores
    },
    shipping() {
      // if (this.FreeShippingCart || !this.$store.state?.envios?.estado) {

      if (this.FreeShippingCart) {
        return 0
      }

      switch (this.rangosByCiudad.envio_metodo) {
        case 'sinEnvio':
        case 'sintarifa':
        case 'gratis':
          return 0
        case 'tarifa_plana':
          return this.rangosByCiudad.valor
        case 'precio_ciudad':
          // eslint-disable-next-line no-case-declarations
          const result = this.rangosByCiudad.rangos.find((rango) => {
            return (
              this.totalCart >= rango.inicial && this.totalCart <= rango.final
            )
          })
          return result ? result.precio : 0
        default:
          return 0
      }
    },
    countryStore() {
      if (this.dataStore && this.dataStore.tiendasInfo.paises.pais) {
        const supportedCountries = ['Colombia', 'Chile', 'Perú', 'Panamá']
        return supportedCountries.includes(
          this.dataStore.tiendasInfo.paises.pais
        )
      }
      return false
    },
    settingByTemplate() {
      return (
        this.$store.state.settingByTemplate ||
        this.$store.state.settingBaseWapir
      )
    },
    inputCheckoutWPP() {
      return this.checkoutWhatsApp?.configuration
        ? JSON.parse(this.checkoutWhatsApp.configuration)
        : null
    },
    setUrlCloseOrder() {
      if (this.dataStore.id === 7454) {
        return this.$route.fullPath
      } else {
        const isTemplateFiveOrTwelve =
          this.dataStore.template === 5 || this.dataStore.template === 12

        return isTemplateFiveOrTwelve ? '/' : '/productos'
      }
    },
  },
  watch: {
    rangosByCiudad() {
      this.filterCities()
    },
    // cities() {
    //   this.filterCities()
    // },
    productsCart() {
      if (this.productsCart) {
        this.tempCart = this.productsCart
        this.shippingPrecio()
        this.productsFreeShippingCart()
      }
    },
    totalCart() {
      this.shippingPrecio()
      this.IsMinValorTotal()
      this.obtainDiscountValue()
    },
    shippingDescuento() {
      this.obtainDiscountValue()
    },
    shippingDescuento2() {
      this.obtainDiscountValue()
    },
    openOrder(value) {
      if (!value && this.quickSale && this.quickSale.state) {
        this.$store.commit('DELETE_ALL_ITEMS_CART')
        this.$store.commit('UPDATE_CONTENT_CART')
        this.$store.commit('SET_OPEN_ORDER', false)
        this.$store.commit('SET_STATE_FORM_MODAL_WHATS_APP', false)
      }
    },
  },
  async mounted() {
    this.getCities()
    this.setPlaceholderDep()
    this.$store.dispatch('GET_DESCUENTOS')
    if (this.$route.query?.clearCart != 'true') {
      this.$store.dispatch('GET_SHOPPING_CART')
    }
    this.$store.commit('CALCULATE_TOTAL_CART')
    if (this.rangosByCiudad.envio_metodo == 'precio') {
      this.shippingPrecio()
    }
    this.productsFreeShippingCart()
    this.IsMinValorTotal()
    this.obtainDiscountValue()
  },
  methods: {
    modalBehaviorWhatsApp(value) {
      if (this.quickSale && this.quickSale.state) {
        this.$store.commit('DELETE_ALL_ITEMS_CART')
        this.$store.commit('UPDATE_CONTENT_CART')
        this.$store.commit('SET_OPEN_ORDER', false)
        this.$store.commit('SET_STATE_FORM_MODAL_WHATS_APP', false)
      } else {
        this.formOrdenWhatsAPP = value
      }
    },
    obtainDiscountValue() {
      let value1 = 0
      let value2 = 0
      if (this.shippingDescuento && this.shippingDescuento.tipo == 1) {
        value1 = this.shippingDescuento.valor ? this.shippingDescuento.valor : 0
      } else if (this.shippingDescuento && this.shippingDescuento.tipo == 0) {
        value1 = this.shippingDescuento.valor
          ? Math.trunc((this.totalCart * this.shippingDescuento.valor) / 100)
          : 0
      }
      if (this.shippingDescuento2 && this.shippingDescuento2.precio) {
        if (this.shippingDescuento2.options == 0) {
          value2 = parseInt(this.shippingDescuento2.precio)
            ? Math.trunc(
                (this.totalCart * parseInt(this.shippingDescuento2.precio)) /
                  100
              )
            : 0
        } else if (this.shippingDescuento2.options == 1) {
          value2 = this.shippingDescuento2.precio
        }
      }
      this.discountDescuentos = value1 + value2
    },
    shippingPrecio() {
      if (!this.FreeShippingCart) {
        if (this.rangosByCiudad.envio_metodo == 'precio') {
          let result = this.rangosByCiudad.rangos.find(
            (rango) =>
              this.totalCart >= rango.inicial && this.totalCart <= rango.final
          )
          this.shippingTarifaPrecio = result ? result.precio : 'empty'
          this.estadoShippingTarifaPrecio = !result
        }
      }
    },
    isQuotation() {
      return this.productsCart.some((product) => product.precio === 0)
    },
    IsMinValorTotal() {
      return (
        this.dataStore.tiendasInfo.valorCompraMinimo == 0 ||
        this.dataStore.tiendasInfo.valorCompraMinimo == null ||
        this.totalCart >= this.dataStore.tiendasInfo.valorCompraMinimo
      )
    },
    addQuantity(product) {
      if (product.limitQuantity > product.cantidad) {
        product.cantidad++
        this.$store.commit('UPDATE_CONTENT_CART')
        this.$store.commit('CALCULATE_TOTAL_CART')
        // this.$store.dispatch('VERIFY_PRODUCTS')
      }
    },
    removeQuantity(product) {
      if (product.cantidad >= 2) {
        product.cantidad--
        this.$store.commit('UPDATE_CONTENT_CART')
        this.$store.commit('CALCULATE_TOTAL_CART')
        // this.$store.dispatch('VERIFY_PRODUCTS')
      }
    },
    deleteItemCart(i) {
      this.$store.commit('DELETEITEMCART', i)
      this.$store.commit('UPDATE_CONTENT_CART')
      // this.$store.dispatch('VERIFY_PRODUCTS')
    },
    removeCartItems() {
      this.remove = false
      location.reload(true)
      this.$store.commit('DELETE_ALL_ITEMS_CART')
      this.$store.commit('UPDATE_CONTENT_CART')
      // this.$store.dispatch('VERIFY_PRODUCTS')
    },
    closeOrder(event) {
      const element = event.target.className
      if (
        element === 'order' ||
        element === 'continue_shopping' ||
        element === 'continue_shopping2'
      ) {
        this.$store.commit('SET_OPEN_ORDER', false)
      }
    },
    closedOder() {
      this.$store.commit('SET_OPEN_ORDER', false)
    },
    GoPayments() {
      let objeto = {}
      objeto = JSON.parse(JSON.stringify(this.productsCart))
      objeto.map((element) => {
        // DATOS IMPORTANTES A ENVIAR = ID - CANTIDAD - COMBINACION
        if (element.id) {
          delete element.envio_gratis
          delete element.foto_cloudinary
          delete element.limitQuantity
          delete element.nombre
          delete element.precio
          delete element.activo
          delete element.stock_disponible
          delete element.con_variante
          delete element.foto
          delete element.informacion_producto
          delete element.orden
          delete element.tag
          delete element.variantes
          delete element.tag_promocion
          delete element.promocion_valor
        }
      })
      let json = {
        products: objeto,
        tienda: {
          id: this.dataStore.id,
        },
        canal: 'KOMERCIA',
      }
      json = JSON.stringify(json)
      if (this.productsCart.length != 0) {
        this.$store.dispatch('SEND_ADD_TO_CART', 2)
        this.sendAnalyticsStore(this.dataStore.id, 'CLICKED_PAY_CART')
        if (this.layoutUniCentro) {
          window.open(`https://checkout.komercia.co/?params=${json}`)
        } else {
          location.href = `https://checkout.komercia.co/?params=${json}`
        }
      }
    },
    async sendAnalyticsStore(value, event) {
      await this.$store.dispatch('SEND_ANALYTICS_STORE', {
        storeId: this.dataStore.id,
        event: event,
        productId: value,
      })
    },
    async getCities() {
      if (this.rangosByCiudad.envio_metodo === 'precio_ciudad') {
        const { success } = await this.$store.dispatch('GET_CITIES')
        if (success) {
          this.filterCities()
        }
      }
    },
    filterCities() {
      if (
        this.rangosByCiudad.envio_metodo === 'precio_ciudad' &&
        this.cities.length > 0
      ) {
        this.rangosByCiudad.rangos.forEach((rango, index) => {
          this.cities.filter((city) => {
            if (city.id === this.rangosByCiudad.rangos[index].id) {
              this.shippingCities.push(city)
            }
          })
        })
      }
    },
    redirectWP() {
      let baseUrlMovil = 'https://api.whatsapp.com/send?phone='
      let baseUrlPc = 'https://web.whatsapp.com/send?phone='
      let productosCart = []
      this.productsCart.map((element) => {
        if (element.combinacion) {
          let combiString = JSON.stringify(element.combinacion)
          let combiList = combiString.replace(/"/g, '')
          let resultcombitList = combiList.replace(/,/g, ' - ')
          productosCart.push(
            `${element.cantidad} x ${
              element.nombre
            } = Variantes: ${resultcombitList} -> Valor: ${
              this.dataStore.tiendasInfo.moneda == 'PEN' ? 'S/' : '$'
            }${element.cantidad * element.precio}`
          )
        } else {
          productosCart.push(
            `${element.cantidad} x ${element.nombre} -> Valor: ${
              this.dataStore.tiendasInfo.moneda == 'PEN' ? 'S/' : '$'
            }${element.cantidad * element.precio}`
          )
        }
      })
      let productString = JSON.stringify(productosCart)
      let productList = productString.replace(/"/g, '')
      let resultproductList = productList.replace(/,/g, '%0A')
      let result = resultproductList.slice(1, -1)
      var text = ''
      if (
        (this.inputCheckoutWPP && this.inputCheckoutWPP.length === 0) ||
        this.inputCheckoutWPP === null ||
        this.inputCheckoutWPP === undefined
      ) {
        if (this.dataStore.tiendasInfo.lenguaje == 'es') {
          text = `Hola%2C%20soy%20${
            this.form.nombre
          }%2C%0Ahice%20este%20pedido%20en%20tu%20tienda%20${encodeURIComponent(
            this.dataStore.nombre
          )}%0ANumero%20de%20orden%3A%20${
            this.numberOrder
          }%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A${result}%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2A${this.translateDeliveryMethod()}%2A%0A%2ADescuento%2A%3A%20${
            this.discountDescuentos
              ? this.dataStore.tiendasInfo.moneda == 'PEN'
                ? '- S/'
                : '- $' + this.discountDescuentos
              : 'No%20aplica'
          }%0A%2ASubtotal%2A%3A%20${
            this.dataStore.tiendasInfo.moneda == 'PEN' ? 'S/' : '$'
          }${this.totalCart}%0A%2ATOTAL%2A%3A%20${
            this.dataStore.tiendasInfo.moneda == 'PEN' ? 'S/' : '$'
          }${
            this.totalCart +
            (this.shipping ? this.shipping : 0) +
            (this.shippingTarifaPrecio &&
            this.shippingTarifaPrecio != 'empty' &&
            !this.FreeShippingCart
              ? this.shippingTarifaPrecio
              : 0) -
            this.discountDescuentos
          }%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2AMi%20informaci%C3%B3n%2A%3A%0A%2ANombre%2A%3A%20${
            this.form.nombre
          }%0A%2AIdentificación%2A%3A%20${encodeURIComponent(
            this.form.phone
          )}%0A%2AE-mail%2A%3A%20${encodeURIComponent(
            this.form.email ? this.form.email : ''
          )}%0A%2A${this.textDepartment}%2A%3A%20${encodeURIComponent(
            this.form.ciudad
          )}%0A%2A${encodeURIComponent(
            this.textCiudad
          )}%2A%3A%20${encodeURIComponent(
            this.form.barrio
          )}%0A%2ADirección%2A%3A%20${encodeURIComponent(
            this.form.dirreccion
          )}%0A%0A%2Avolver%20a%20la%20tienda%2A%3A%20${
            window.location
          }?clearCart=true`
        } else if (this.dataStore.tiendasInfo.lenguaje == 'en') {
          text = `Hello%2C%20I%20am%20${
            this.form.nombre
          }%2C%0AI%20made%20this%20order%20at%20your%20store%20${encodeURIComponent(
            this.dataStore.nombre
          )}%0AOrder%20number%3A%20${
            this.numberOrder
          }%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A${result}%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2A${this.translateDeliveryMethod()}%2A%0A%2ADiscount%2A%3A%20${
            this.discountDescuentos
              ? this.dataStore.tiendasInfo.moneda == 'PEN'
                ? '- S/'
                : '- $' + this.discountDescuentos
              : 'Not%20applicable'
          }%0A%2ASubtotal%2A%3A%20${
            this.dataStore.tiendasInfo.moneda == 'PEN' ? 'S/' : '$'
          }${this.totalCart}%0A%2ATOTAL%2A%3A%20${
            this.dataStore.tiendasInfo.moneda == 'PEN' ? 'S/' : '$'
          }${
            this.totalCart +
            (this.shipping ? this.shipping : 0) +
            (this.shippingTarifaPrecio &&
            this.shippingTarifaPrecio != 'empty' &&
            !this.FreeShippingCart
              ? this.shippingTarifaPrecio
              : 0) -
            this.discountDescuentos
          }%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2AMy%20information%2A%3A%0A%2AName%2A%3A%20${
            this.form.nombre
          }%0A%2AIdentification%2A%3A%20${encodeURIComponent(
            this.form.phone
          )}%0A%2AE-mail%2A%3A%20${encodeURIComponent(
            this.form.email ? this.form.email : ''
          )}%0A%2A${this.textDepartment}%2A%3A%20${
            this.form.ciudad
          }%0A%2A${encodeURIComponent(this.textCiudad)}%2A%3A%20${
            this.form.barrio
          }%0A%2AAddres%2A%3A%20${encodeURIComponent(
            this.form.dirreccion
          )}%0A%0A%2Aback%20to%20the%20store%2A%3A%20${
            window.location
          }?clearCart=true`
        } else if (this.dataStore.tiendasInfo.lenguaje == 'pt') {
          text = `Olá%2C%20aqui%20é%20${
            this.form.nombre
          }%2C%0Afiz%20esse%20pedido%20em%20sua%20loja%20Mustad%20Whatsapp%20${encodeURIComponent(
            this.dataStore.nombre
          )}%0AN%C3%BAmero%20do%20pedido%3A%20${
            this.numberOrder
          }%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A${result}%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2A${this.translateDeliveryMethod()}%2A%0A%2ADesconto%2A%3A%20${
            this.discountDescuentos
              ? this.dataStore.tiendasInfo.moneda == 'PEN'
                ? '- S/'
                : '- $' + this.discountDescuentos
              : 'Não%20aplicável'
          }%0A%2ASubtotal%2A%3A%20${
            this.dataStore.tiendasInfo.moneda == 'PEN' ? 'S/' : '$'
          }${this.totalCart}%0A%2ATOTAL%2A%3A%20${
            this.dataStore.tiendasInfo.moneda == 'PEN' ? 'S/' : '$'
          }${
            this.totalCart +
            (this.shipping ? this.shipping : 0) +
            (this.shippingTarifaPrecio &&
            this.shippingTarifaPrecio != 'empty' &&
            !this.FreeShippingCart
              ? this.shippingTarifaPrecio
              : 0) -
            this.discountDescuentos
          }%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2AMy%20Minhas%20informaçãoes%2A%3A%0A%2ANome%2A%3A%20${
            this.form.nombre
          }%0A%2Aidentificação%2A%3A%20${encodeURIComponent(
            this.form.phone
          )}%0A%2AE-mail%2A%3A%20${encodeURIComponent(
            this.form.email ? this.form.email : ''
          )}%0A%2A${this.textDepartment}%2A%3A%20${encodeURIComponent(
            this.form.ciudad
          )}%0A%2A${encodeURIComponent(this.textCiudad)}%2A%3A%20${
            this.form.barrio
          }%0A%2AEndereço%2A%3A%20${encodeURIComponent(
            this.form.dirreccion
          )}%0A%0A%2Ade%20volta%20%C3%A0%20loja%2A%3A%20${
            window.location
          }?clearCart=true`
        } else {
          text = `Hola%2C%20soy%20${
            this.form.nombre
          }%2C%0Ahice%20este%20pedido%20en%20tu%20tienda%20${encodeURIComponent(
            this.dataStore.nombre
          )}%0ANumero%20de%20orden%3A%20${
            this.numberOrder
          }%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A${result}%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2A${this.translateDeliveryMethod()}%2A%0A%2ADescuento%2A%3A%20${
            this.discountDescuentos
              ? this.dataStore.tiendasInfo.moneda == 'PEN'
                ? '- S/'
                : '- $' + this.discountDescuentos
              : 'No%20aplica'
          }%0A%2ASubtotal%2A%3A%20${
            this.dataStore.tiendasInfo.moneda == 'PEN' ? 'S/' : '$'
          }${this.totalCart}%0A%2ATOTAL%2A%3A%20${
            this.dataStore.tiendasInfo.moneda == 'PEN' ? 'S/' : '$'
          }${
            this.totalCart +
            (this.shipping ? this.shipping : 0) +
            (this.shippingTarifaPrecio &&
            this.shippingTarifaPrecio != 'empty' &&
            !this.FreeShippingCart
              ? this.shippingTarifaPrecio
              : 0) -
            this.discountDescuentos
          }%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2AMi%20informaci%C3%B3n%2A%3A%0A%2ANombre%2A%3A%20${
            this.form.nombre
          }%0A%2AIdentificación%2A%3A%20${encodeURIComponent(
            this.form.phone
          )}%0A%2AE-mail%2A%3A%20${encodeURIComponent(
            this.form.email ? this.form.email : ''
          )}%0A%2A${this.textDepartment}%2A%3A%20${encodeURIComponent(
            this.form.ciudad
          )}%0A%2A${encodeURIComponent(
            this.textCiudad
          )}%2A%3A%20${encodeURIComponent(
            this.form.barrio
          )}%0A%2ADirección%2A%3A%20${encodeURIComponent(
            this.form.dirreccion
          )}%0A%0A%2Avolver%20a%20la%20tienda%2A%3A%20${
            window.location
          }?clearCart=true`
        }
      } else {
        if (this.dataStore.tiendasInfo.lenguaje == 'es') {
          text = `Hola%20%F0%9F%91%8B.%0AHice%20este%20pedido%20%F0%9F%93%A6%20en%20tu%20tienda%20${encodeURIComponent(
            this.dataStore.nombre
          )}%0ANumero%20de%20orden%3A%20${
            this.numberOrder
          }%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A${result}%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2A${this.translateDeliveryMethod()}%2A%0A%2ADescuento%2A%3A%20-${
            this.discountDescuentos
              ? this.dataStore.tiendasInfo.moneda == 'PEN'
                ? 'S/'
                : '$' + this.discountDescuentos
              : 'No%20aplica'
          }%0A%2ASubtotal%2A%3A%20${
            this.dataStore.tiendasInfo.moneda == 'PEN' ? 'S/' : '$'
          }${this.totalCart}%0A%2ATOTAL%2A%3A%20${
            this.dataStore.tiendasInfo.moneda == 'PEN' ? 'S/' : '$'
          }${
            this.totalCart +
            (this.shipping ? this.shipping : 0) +
            (this.shippingTarifaPrecio &&
            this.shippingTarifaPrecio != 'empty' &&
            !this.FreeShippingCart
              ? this.shippingTarifaPrecio
              : 0) -
            this.discountDescuentos
          }%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2AMi%20informaci%C3%B3n%2A%3A%0A${this.formatDataCheckout()}%0A%0A%2Avolver%20a%20la%20tienda%2A%3A%20${
            this.quickSale && this.quickSale.state
              ? this.locationStore
              : window.location
          }?clearCart=true`
        } else if (this.dataStore.tiendasInfo.lenguaje == 'en') {
          text = `Hello%20%F0%9F%91%8B.%0AI%20placed%20this%20order%20%F0%9F%93%A6%20in%20your%20store.%20${encodeURIComponent(
            this.dataStore.nombre
          )}%0AOrder%20number%3A%20${
            this.numberOrder
          }%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A${result}%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2A${this.translateDeliveryMethod()}%2A%0A%2ADiscount%2A%3A%20${
            this.discountDescuentos
              ? this.dataStore.tiendasInfo.moneda == 'PEN'
                ? '- S/'
                : '- $' + this.discountDescuentos
              : 'Not%20applicable'
          }%0A%2ASubtotal%2A%3A%20${
            this.dataStore.tiendasInfo.moneda == 'PEN' ? 'S/' : '$'
          }${this.totalCart}%0A%2ATOTAL%2A%3A%20${
            this.dataStore.tiendasInfo.moneda == 'PEN' ? 'S/' : '$'
          }${
            this.totalCart +
            (this.shipping ? this.shipping : 0) +
            (this.shippingTarifaPrecio &&
            this.shippingTarifaPrecio != 'empty' &&
            !this.FreeShippingCart
              ? this.shippingTarifaPrecio
              : 0) -
            this.discountDescuentos
          }%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2AMy%20information%2A%3A%0A${this.formatDataCheckout()}%0A%0A%2Aback%20to%20the%20store%2A%3A%20${
            this.quickSale && this.quickSale.state
              ? this.locationStore
              : window.location
          }?clearCart=true`
        } else if (this.dataStore.tiendasInfo.lenguaje == 'pt') {
          text = `Ol%C3%A1%20%F0%9F%91%8B.%0AEu%20coloquei%20este%20pedido%20%F0%9F%93%A6%20em%20sua%20loja.%20${encodeURIComponent(
            this.dataStore.nombre
          )}%0AN%C3%BAmero%20do%20pedido%3A%20${
            this.numberOrder
          }%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A${result}%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2A${this.translateDeliveryMethod()}%2A%0A%2ADesconto%2A%3A%20-${
            this.discountDescuentos
              ? this.dataStore.tiendasInfo.moneda == 'PEN'
                ? 'S/'
                : '$' + this.discountDescuentos
              : 'Não%20aplicável'
          }%0A%2ASubtotal%2A%3A%20${
            this.dataStore.tiendasInfo.moneda == 'PEN' ? 'S/' : '$'
          }${this.totalCart}%0A%2ATOTAL%2A%3A%20${
            this.dataStore.tiendasInfo.moneda == 'PEN' ? 'S/' : '$'
          }${
            this.totalCart +
            (this.shipping ? this.shipping : 0) +
            (this.shippingTarifaPrecio &&
            this.shippingTarifaPrecio != 'empty' &&
            !this.FreeShippingCart
              ? this.shippingTarifaPrecio
              : 0) -
            this.discountDescuentos
          }%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2AMy%20Minhas%20informaçãoes%2A%3A%0A${this.formatDataCheckout()}%0A%0A%2Ade%20volta%20%C3%A0%20loja%2A%3A%20${
            this.quickSale && this.quickSale.state
              ? this.locationStore
              : window.location
          }?clearCart=true`
        } else {
          if (this.dataStore.tiendasInfo.lenguaje == 'es') {
            text = `Hola%20%F0%9F%91%8B.%0AHice%20este%20pedido%20%F0%9F%93%A6%20en%20tu%20tienda%20${encodeURIComponent(
              this.dataStore.nombre
            )}%0ANumero%20de%20orden%3A%20${
              this.numberOrder
            }%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A${result}%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2A${this.translateDeliveryMethod()}%2A%0A%2ADescuento%2A%3A%20${
              this.discountDescuentos
                ? this.dataStore.tiendasInfo.moneda == 'PEN'
                  ? '- S/'
                  : '- $' + this.discountDescuentos
                : 'No%20aplica'
            }%0A%2ASubtotal%2A%3A%20${
              this.dataStore.tiendasInfo.moneda == 'PEN' ? 'S/' : '$'
            }${this.totalCart}%0A%2ATOTAL%2A%3A%20${
              this.dataStore.tiendasInfo.moneda == 'PEN' ? 'S/' : '$'
            }${
              this.totalCart +
              (this.shipping ? this.shipping : 0) +
              (this.shippingTarifaPrecio &&
              this.shippingTarifaPrecio != 'empty' &&
              !this.FreeShippingCart
                ? this.shippingTarifaPrecio
                : 0) -
              this.discountDescuentos
            }%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2AMi%20informaci%C3%B3n%2A%3A%0A${this.formatDataCheckout()}%0A%0A%2Avolver%20a%20la%20tienda%2A%3A%20${
              this.quickSale && this.quickSale.state
                ? this.locationStore
                : window.location
            }?clearCart=true`
          }
        }
      }
      if (
        this.quickSale &&
        this.quickSale.state &&
        this.quickSale.dataSeller.phone
      ) {
        if (this.quickSale && this.quickSale.state) {
          if (this.quickSale.dataSeller.phone.charAt(0) == '+') {
            let phone_number_whatsapp = this.quickSale.dataSeller.phone.slice(1)
            if (this.mobileCheck()) {
              window.location.href = `${baseUrlMovil}${phone_number_whatsapp}&text=${text}`
            } else {
              window.location.href = `${baseUrlPc}${phone_number_whatsapp}&text=${text}`
            }
          }
        }
      } else {
        if (this.dataStore.redes.whatsapp.charAt(0) == '+') {
          let phone_number_whatsapp = this.dataStore.redes.whatsapp.slice(1)
          if (this.mobileCheck()) {
            window.location.href = `${baseUrlMovil}${phone_number_whatsapp}&text=${text}`
          } else {
            window.location.href = `${baseUrlPc}${phone_number_whatsapp}&text=${text}`
          }
        } else {
          if (this.mobileCheck()) {
            window.location.href = `${baseUrlMovil}57${this.dataStore.redes.whatsapp}&text=${text}`
          } else {
            window.location.href = `${baseUrlPc}57${this.dataStore.redes.whatsapp}&text=${text}`
          }
        }
      }
      setTimeout(() => {
        this.modalConfirmation = false
        this.closedOder()
        this.$message({
          showClose: true,
          message:
            '¡Por falta de permisos no fue posible abrir WhatsApp para enviar la información!',
          type: 'error',
          duration: 9000,
        })
        this.removeCartItems()
      }, 9000)
    },
    setOrderWa() {
      this.$refs.observer.validate().then((response) => {
        if (response) {
          this.modalConfirmation = true
          if (
            (this.inputCheckoutWPP && this.inputCheckoutWPP.length === 0) ||
            this.inputCheckoutWPP === null ||
            this.inputCheckoutWPP === undefined
          ) {
            let temp = {
              nombre: this.form.nombre,
              phone: this.form.phone, // Es la cedula
              correo: this.form.email,
              identificacion: this.form.identificacion, //Es el telefono
              ciudad: this.form.ciudad,
              barrio: this.form.barrio,
              direccion: this.form.dirreccion,
            }
            this.formStringify = JSON.stringify(temp)
          } else {
            this.formStringify = JSON.stringify(this.inputCheckoutWPP)
          }
          this.eventFacebookPixel()
          const params = {
            canal: 1,
            usuario: 30866,
            tipo: 0,
            tienda: this.dataStore.id,
            total:
              this.totalCart +
              (this.shipping ? this.shipping : 0) +
              (this.shippingTarifaPrecio &&
              this.shippingTarifaPrecio != 'empty' &&
              !this.FreeShippingCart
                ? this.shippingTarifaPrecio
                : 0) -
              this.discountDescuentos,
            direccion_entrega: {
              type: 0,
              value: null,
            },
            productos: this.productsCart,
            comentario: this.formStringify,
            costo_envio: this.setShipping(),
            metodo_pago: 7,
            descuento: this.discountDescuentos ? this.discountDescuentos : 0,
            reseller: this.userDropshipping
              ? Number(this.userDropshipping)
              : null,
          }
          axios
            .post(`${this.$store.state.urlKomercia}/api/usuario/orden`, params)
            .then((response) => {
              this.numberOrder = response.data.data.id
              this.textConfirmation =
                '¡Información enviada correctamente a la tienda!'
              this.stateBtnConfirmation = true
              this.sendAnalyticsStore(this.dataStore.id, 'CLICKED_PAY_CART')
            })
            .catch(() => {
              this.textConfirmation = 'Error al enviar los datos!'
              this.$message({
                message: 'Error al enviar los datos!',
                type: 'error',
              })
            })
        }
      })
    },
    setShipping() {
      if (this.rangosByCiudad) {
        switch (this.rangosByCiudad.envio_metodo) {
          case 'gratis':
          case 'precio_ciudad':
          case 'sintarifa':
            return 0

          case 'sinEnvio':
          case 'tarifa_plana':
            return this.rangosByCiudad.valor

          case 'precio':
            return this.shippingTarifaPrecio

          default:
            return 0
        }
      } else {
        return 0
      }
    },
    translateDeliveryMethod() {
      let textFreeShippingCart
      if (this.rangosByCiudad && this.rangosByCiudad.envio_metodo == 'gratis') {
        if (this.dataStore.tiendasInfo.lenguaje == 'es') {
          textFreeShippingCart = 'Env%C3%ADo%20gratis'
        } else if (this.dataStore.tiendasInfo.lenguaje == 'en') {
          textFreeShippingCart = 'Free%20shippings'
        } else if (this.dataStore.tiendasInfo.lenguaje == 'pt') {
          textFreeShippingCart = 'Frete%20gr%C3%A1tis'
        }
      } else if (
        this.rangosByCiudad &&
        this.rangosByCiudad.envio_metodo == 'tarifa_plana'
      ) {
        if (this.dataStore.tiendasInfo.lenguaje == 'es') {
          textFreeShippingCart = `Costo%20domicilio:%20${
            this.dataStore.tiendasInfo.moneda == 'PEN' ? 'S/' : '$'
          }${this.rangosByCiudad.valor}`
        } else if (this.dataStore.tiendasInfo.lenguaje == 'en') {
          textFreeShippingCart = `Shipping%cost:%20${
            this.dataStore.tiendasInfo.moneda == 'PEN' ? 'S/' : '$'
          }${this.rangosByCiudad.valor}`
        } else if (this.dataStore.tiendasInfo.lenguaje == 'pt') {
          textFreeShippingCart = `Custos%20envio:%20${
            this.dataStore.tiendasInfo.moneda == 'PEN' ? 'S/' : '$'
          }${this.rangosByCiudad.valor}`
        }
      } else if (
        this.rangosByCiudad &&
        this.rangosByCiudad.envio_metodo == 'precio_ciudad'
      ) {
        if (this.dataStore.tiendasInfo.lenguaje == 'es') {
          textFreeShippingCart = 'Costos%20de%20Env%C3%ADo%20por%20separado'
        } else if (this.dataStore.tiendasInfo.lenguaje == 'en') {
          textFreeShippingCart = 'Shipping%20cost%20separately'
        } else if (this.dataStore.tiendasInfo.lenguaje == 'pt') {
          textFreeShippingCart = 'Custos%20de%20envio%20negociar%20a%20parte'
        }
      } else if (
        this.rangosByCiudad &&
        this.rangosByCiudad.envio_metodo == 'precio'
      ) {
        if (this.dataStore.tiendasInfo.lenguaje == 'es') {
          textFreeShippingCart = `Costo%20domicilio:%20${
            this.dataStore.tiendasInfo.moneda == 'PEN' ? 'S/' : '$'
          }${this.shippingTarifaPrecio}`
        } else if (this.dataStore.tiendasInfo.lenguaje == 'en') {
          textFreeShippingCart = `Shipping%cost:%20${
            this.dataStore.tiendasInfo.moneda == 'PEN' ? 'S/' : '$'
          }${this.shippingTarifaPrecio}`
        } else if (this.dataStore.tiendasInfo.lenguaje == 'pt') {
          textFreeShippingCart = `Custos%20envio:%20${
            this.dataStore.tiendasInfo.moneda == 'PEN' ? 'S/' : '$'
          }${this.shippingTarifaPrecio}`
        }
      } else if (
        this.rangosByCiudad &&
        this.rangosByCiudad.envio_metodo == 'sintarifa'
      ) {
        if (this.dataStore.tiendasInfo.lenguaje == 'es') {
          textFreeShippingCart = 'Costos%20de%20Env%C3%ADo%20por%20separado'
        } else if (this.dataStore.tiendasInfo.lenguaje == 'en') {
          textFreeShippingCart = 'Shipping%20cost%20separately'
        } else if (this.dataStore.tiendasInfo.lenguaje == 'pt') {
          textFreeShippingCart = 'Custos%20de%20envio%20negociar%20a%20parte'
        }
      } else {
        if (this.dataStore.tiendasInfo.lenguaje == 'es') {
          textFreeShippingCart = 'Costos%20de%20Env%C3%ADo%20por%20separado'
        } else if (this.dataStore.tiendasInfo.lenguaje == 'en') {
          textFreeShippingCart = 'Shipping%20cost%20separately'
        } else if (this.dataStore.tiendasInfo.lenguaje == 'pt') {
          textFreeShippingCart = 'Custos%20de%20envio%20negociar%20a%20parte'
        }
      }
      return textFreeShippingCart
    },
    formatDataCheckout() {
      const temp = this.inputCheckoutWPP
        .filter((item) => item.value)
        .map((item) => `\n${item.textInput}: ${item.value}`)
        .join('')
      return encodeURIComponent(temp)
    },
    eventFacebookPixel() {
      let array = []
      let content = []
      this.productsCart.map((element) => {
        if (element) {
          array.push(`${element.id}`)
          let temp = {
            id: `${element.id}`,
            quantity: element.cantidad,
          }
          content.push(temp)
        }
      })
      if (this.facebookPixel?.pixel_facebook != null) {
        window.fbq('track', 'Purchase', {
          content_type: 'product',
          content_ids: array,
          contents: content,
          description: `Comprar finalizada WhatsApp`,
          value:
            this.totalCart +
            (this.shipping ? this.shipping : 0) +
            (this.shippingTarifaPrecio &&
            this.shippingTarifaPrecio != 'empty' &&
            !this.FreeShippingCart
              ? this.shippingTarifaPrecio
              : 0) -
            this.discountDescuentos,
          currency: this.dataStore.tiendasInfo.moneda,
        })
      }
    },
    productsFreeShippingCart() {
      if (this.productsCart) {
        let result = this.productsCart.filter(
          (rango) => rango.envio_gratis === 1
        )
        this.FreeShippingCart = this.productsCart.length == result.length
      }
    },
    setPlaceholderDep() {
      switch (this.dataStore.tiendasInfo.paises.id) {
        //colombia
        case 1:
          this.placeholderDepart = 'footer_formDepartamento'
          this.placeholderBarrio = 'footer_formBarrio'
          this.placeholderMsgBarrio = 'footer_formBarrioMgs'
          ;(this.textDepartment = 'Departamento'),
            (this.textCiudad = 'Cuidad / Barrio / Zona')
          break
        //Mexico
        case 3:
          this.placeholderDepart = 'footer_formEstado'
          this.placeholderBarrio = 'footer_formBarrio1'
          this.placeholderMsgBarrio = 'footer_formBarrioMgs'
          ;(this.textDepartment = 'Estado'),
            (this.textCiudad = 'Cuidad / Colonia / Zona')
          break
        //Argentina
        case 6:
          this.placeholderDepart = 'footer_formRegion'
          this.placeholderBarrio = 'footer_formComuna'
          this.placeholderMsgBarrio = 'footer_formBarrioMgs'
          ;(this.textDepartment = 'Región'),
            (this.textCiudad = 'Provincia / Comuna / Sector')
          break
        //Chile
        case 7:
          this.placeholderDepart = 'footer_formRegion'
          this.placeholderBarrio = 'footer_formComuna'
          this.placeholderMsgBarrio = 'footer_formBarrioMgs'
          ;(this.textDepartment = 'Región'),
            (this.textCiudad = 'Provincia / Comuna / Sector')
          break
        //Puerto Rico
        case 8:
          this.placeholderDepart = 'footer_formMunicipios'
          this.placeholderBarrio = 'footer_formComuna'
          this.placeholderMsgBarrio = 'footer_formBarrioMgs'
          ;(this.textDepartment = 'Municipio'),
            (this.textCiudad = 'Provincia / Comuna / Sector')
          break
        //Perú
        case 9:
          this.placeholderDepart = 'footer_formDepartamento'
          this.placeholderBarrio = 'footer_formBarrio3'
          this.placeholderMsgBarrio = 'footer_formBarrioMgs'
          ;(this.textDepartment = 'Departamento'),
            (this.textCiudad = 'Provincia / Cuidad / Zona')
          break
        //Panama
        case 10:
          this.placeholderDepart = 'footer_formProvincia'
          this.placeholderBarrio = 'footer_formBarrio2'
          this.placeholderMsgBarrio = 'footer_formBarrioMgs'
          ;(this.textDepartment = 'Provincia'),
            (this.textCiudad = 'Distritos / Zona')
          break
      }
    },
  },
}
</script>

<style scoped>
.width-drawer >>> .el-drawer__open .el-drawer.rtl {
  width: 410px !important;
}
@media (max-width: 800px) {
  .width-drawer >>> .el-drawer__open .el-drawer.rtl {
    width: 100% !important;
  }
}
.order_content {
  width: 100%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: none;
  overflow: auto;
  box-sizing: border-box;
  padding-bottom: 20px;
  animation: dispatch 0.2s linear 1;
  overflow: hidden;
}
.order_content > div {
  width: 100%;
  box-sizing: border-box;
}
.order_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ededed;
  padding: 15px 23px;
  flex: none;
}
.leftright,
.rightleft {
  background: #2c2930;
}
.order_header_close {
  @apply relative w-30 h-20 cursor-pointer flex justify-center items-center;
}
.leftright {
  @apply h-4 w-30 absolute rounded-2 transform -rotate-45 transition-all ease-in duration-200;
}
.rightleft {
  @apply h-4 w-30 absolute rounded-2 transform rotate-45 transition-all ease-in duration-200;
}
.order_header_close:hover .leftright {
  @apply transform rotate-0;
  background: #000;
}
.order_header_close:hover .rightleft {
  @apply transform rotate-0;
  background: #000;
}
.order_header_close:hover {
  color: gray;
}
.order--wrapper {
  height: 100%;
  display: grid;
  overflow-y: auto;
}
@media (max-height: 740px) {
  .order_products_list {
    max-height: 380px;
  }
  .order_products_list-empty {
    height: 380px;
  }
}
.order_products_list-empty {
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}
.order_products_list {
  max-height: 480px;
  overflow-y: auto;
  overflow-x: hidden;
  list-style: none;
}
.order_products_list::-webkit-scrollbar {
  border: 1px solid #ededed;
  background: transparent;
  width: 6px;
}
.order_products_list::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px #2c2930;
  border-radius: 10px;
}
.order_products_list::-webkit-scrollbar-thumb {
  background: #2c2930;
  border-radius: 10px;
}
.order_products_list_item {
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #ededed;
  padding: 10px 23px;
  overflow-x: auto;
}
.order_products_list_item::-webkit-scrollbar {
  background: transparent;
  width: 6px;
  max-height: 8px;
}
.order_products_list_item::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px #2c2930;
  border-radius: 10px;
}
.order_products_list_item::-webkit-scrollbar-thumb {
  background: #2c2930;
  border-radius: 10px;
}
.img_product {
  max-width: 50px;
  max-height: 50px;
  border-radius: 5px;
  object-fit: cover;
  margin-right: 5px;
}
.order_products_list_item .name {
  max-width: 190px;
  width: 100%;
  box-sizing: border-box;
}
.name >>> .el-tag {
  border-color: #2c2930;
  background-color: #2c2930;
  color: #fff;
  display: inline-block;
  height: 28px;
  margin-left: 2px;
  padding: 0 2px;
  font-size: 12px;
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  text-align: center;
  box-sizing: border-box;
  white-space: nowrap;
}
.order-text {
  color: #2c2930;
  font-size: 14px;
}
.unidades {
  color: #2c2930;
  font-size: 13px;
  font-weight: 500;
}
.order-combincacion {
  width: 100%;
  max-width: 180px;
  column-count: 2;
  column-gap: 5px;
  column-fill: initial;
}
.order-combincacion-uni {
  border-radius: 10px;
  border: 1px solid white;
  background-color: #2c2930;
  color: #fff;
}
.order-combincacion-text {
  text-align: center;
  color: white;
  font-size: 10px;
}
.price {
  width: 100%;
  min-width: 60px;
  max-width: 100px;
  color: #2c2930;
  font-size: 16px;
}
.icon-delete {
  font-size: 20px;
  cursor: pointer;
  color: #2c2930;
  transition: 0.3s;
  bottom: 5px;
}
.icon-delete:hover {
  color: rgb(223, 62, 62);
}

.order_beforefreeshipping {
  text-align: center;
  background-color: #ffd558;
  padding: 5px 0;
}
.order_freeshipping {
  text-align: center;
  background-color: #45d482;
  padding: 5px 0;
}
.order_beforefreeshipping p,
.order_beforefreeshipping p strong,
.order_freeshipping p,
.order_freeshipping p strong {
  color: #2c2930;
}
.content-remove-cart {
  margin-top: 10px;
  max-width: 364px;
  padding: 8px 10px;
  transition: all ease 0.3s;
}
.content-remove-cart p {
  color: #2c2930;
  font-weight: 300;
  font-size: 14px;
  text-decoration: underline #2c2930;
}
.header-icon-cart {
  font-size: 14px;
  margin-right: 5px;
  color: #2c2930;
  bottom: 0.125em;
}
.content-remove-cart p:hover {
  color: rgb(223, 62, 62);
}
.wrapper-items-remove {
  position: absolute;
  height: calc(100vh);
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  top: 0;
}
.content-items-remove {
  width: 100%;
  margin: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
}
.text-remove {
  padding: 20px;
  text-align: center;
  color: #2c2930;
  font-weight: 300;
  font-size: 16px;
}
.content-btn-remove {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 20px;
}
.btn-remover-yes {
  font-weight: bold;
  border-style: none;
  background-color: #2c2930;
  padding: 4px 10px;
  width: 100%;
  max-width: 70px;
  color: white;
  border: 2px solid #2c2930;
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;
  outline: none;
  transition: all ease 0.3s;
}
.btn-remover-yes:hover {
  background-color: #2c2930;
  border: 2px solid #2c2930;
}
.btn-remover-no {
  font-weight: bold;
  border-style: none;
  background-color: transparent;
  padding: 4px 10px;
  width: 100%;
  max-width: 80px;
  color: red;
  border: 2px solid red;
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;
  outline: none;
  transition: all ease 0.3s;
}
.btn-remover-no:hover {
  color: #2c2930;
  border: 2px solid #ededed;
}
.order_total {
  border-top: 1px solid #ededed;
  padding: 0 23px;
}
.order_total_domicile,
.order_total_net {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}
.order_total_domicile p {
  color: #2c2930;
  font-weight: 300;
  font-size: 14px;
}
.text-color {
  color: #2c2930;
}
.order_total_domicile >>> .text-TarifaPrecio {
  display: flex;
  justify-content: flex-end;
  color: red;
}
.scroll_cart_summary_items_cities {
  color: #2c2930;
  overflow-y: auto;
  max-height: 150px;
  display: flex;
  flex-direction: column;
  max-width: 230px;
}
.scroll_cart_summary_items_cities li {
  margin-right: 5px;
}
.scroll_cart_summary_items_cities::-webkit-scrollbar {
  background: transparent;
  width: 4px;
}
.scroll_cart_summary_items_cities::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px var(--background_color_2);
  border-radius: 10px;
}
.scroll_cart_summary_items_cities::-webkit-scrollbar-thumb {
  background: var(--color_icon);
  border-radius: 10px;
}
.without_shipping_cost {
  color: #2c2930;
  font-size: 13px;
}
.order_total_net p {
  color: #2c2930;
  font-weight: bold;
}
.domicilio-message {
  margin-top: 10px;
  text-align: center;
  font-weight: bold;
  border-style: none;
  background-color: transparent;
  padding: 8px 10px;
  width: 100%;
  max-width: 280px;
  color: #2c2930;
  font-size: 14px;
  letter-spacing: 1px;
  outline: none;
  flex: none;
}
.wrapper-Quotation {
  width: 100%;
  /* padding: 0 30px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.Quotation-message {
  margin-top: 10px;
  text-align: center;
  font-weight: bold;
  border-style: none;
  background-color: transparent;
  padding: 8px 10px;
  width: 100%;
  max-width: 364px;
  color: #2c2930;
  font-size: 14px;
  letter-spacing: 1px;
  outline: none;
  flex: none;
}
.wp-icon {
  font-size: 24px;
  bottom: 4px;
  margin-right: 5px;
}
.continue_shopping {
  width: 100%;
  max-width: 364px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 8px 10px;
  border-radius: var(--radius_btn);
  color: #fff;
  border: solid 2px #2c2930;
  background-color: #2c2930;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  outline: none;
  flex: none;
  height: 41px;
  transition: all ease 0.3s;
}
.continue_shopping:hover {
  border: solid 2px #a1a1a1;
  background-color: #a1a1a1;
  color: #2c2930;
}
.conten-btn {
  display: flex;
  width: 100%;
  justify-content: center;
}
.continue_shopping2 {
  margin-top: 10px;
  font-weight: bold;
  text-align: center;
  background-color: transparent;
  padding: 8px 10px;
  width: 100%;
  max-width: 364px;
  color: #2c2930;
  border: 2px solid #2c2930;
  border-radius: var(--radius_btn);
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;
  outline: none;
  flex: none;
  height: 41px;
  transition: all ease 0.3s;
}
.continue_shopping2:hover {
  color: #a1a1a1;
  border: 2px solid #a1a1a1;
}
.photo {
  /* width: 120px; */
  height: 120px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
}
.text-empty {
  color: #222;
  margin-top: 15px;
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 18px;
}
.text-empty2 {
  color: #222;
  margin-bottom: 15px;
  font-weight: 400;
  font-size: 16px;
  max-width: 300px;
  text-align: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.slide-enter-active {
  transition: all 0.3s ease;
}
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter,
.slide-leave-to {
  /* transform: translateX(200px); */
  margin-left: 150px;
  opacity: 0;
}
.content-button {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
details {
  color: #333;
  font-size: 13px;
  align-self: center;
  flex: 1;
  margin-left: 30px;
}
details summary {
  outline: none;
  cursor: pointer;
  text-align: right;
  font-size: 14px;
  font-weight: bold;
}
details ol {
  display: flex;
  flex-direction: column;
  padding: 5px 0;
}
details ol li div {
  padding: 2px 4px;
  display: flex;
  justify-content: space-between;
}
details ol li:nth-child(even) {
  background-color: rgba(102, 102, 102, 0.1);
}
details[open] summary ~ * {
  animation: sweep 0.5s ease-in-out;
}
.continue_shopping_whatsapp {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 8px 10px;
  width: 100%;
  max-width: 364px;
  border-radius: var(--radius_btn);
  color: #fff;
  border: solid 2px #2c2930;
  background-color: #2c2930;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  outline: none;
  flex: none;
  height: 41px;
  transition: all ease 0.3s;
}
.continue_shopping_whatsapp:hover {
  border: solid 2px #25d366;
  background-color: #25d366;
  color: #fff;
}
.wrapper-items-form {
  position: absolute;
  height: calc(100vh);
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  z-index: 10;
  top: 0;
  overflow-y: auto;
  padding: 20px 0 45px;
}
.content-items-form {
  width: 100%;
  padding: 10px 0px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  position: relative;
}
.items-form {
  width: 100%;
  padding: 10px 30px;
}
.form_close {
  font-size: 30px;
  color: #25d366;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 10px;
}
.form_close:hover {
  color: gray;
}
.form-text {
  color: black;
  font-weight: bold;
  font-size: 17px;
  margin-bottom: 15px;
}
.form-subtext {
  font-size: 13px;
  font-weight: 500;
  color: #7e7e7e;
  margin-bottom: 2px;
}
.content-input {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.is-required:after {
  content: '*';
  margin-left: 3px;
  color: red;
  font-weight: bold;
}
.input-text {
  font-size: 13px;
  color: #7e7e7e;
  border: solid 2px #c9c9c9;
  border-radius: 8px;
  background-color: transparent;
  padding: 5px 14px;
  width: 100%;
}
.input-text::placeholder {
  color: rgba(21, 20, 57, 0.541);
  opacity: 0.7;
}
.input-text:-internal-autofill-selected {
  -webkit-appearance: menulist-button;
  background-color: transparent !important;
  background-image: none !important;
  color: -internal-light-dark-color(black, white) !important;
}
.input-text:focus,
.input-text:active {
  outline: 0;
  border: solid 2px black;
}
.text-error {
  font-size: 12px;
  color: #cb2027;
  width: 100%;
  margin-left: 10px;
}
.continue_shopping_form {
  font-size: 16px;
  padding: 8px 10px;
  width: 100%;
  height: 44px;
  max-width: 340px;
  font-weight: 400;
  cursor: pointer;
  text-decoration: none;
  position: fixed;
  bottom: 8px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: var(--radius_btn);
  color: #fff;
  border: solid 2px #2c2930;
  background-color: #2c2930;
}
.continue_shopping_form:hover {
  border: solid 2px #ccc;
  background-color: #fff;
  color: #2c2930;
}
.continue_form_confirmation {
  font-size: 16px;
  padding: 8px 10px;
  width: 100%;
  height: 44px;
  max-width: 340px;
  font-weight: 400;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 20px;
  border-radius: var(--radius_btn);
  color: #fff;
  border: solid 2px #2c2930;
  background-color: #2c2930;
}
.continue_form_confirmation:hover {
  border: solid 2px #ccc;
  background-color: #fff;
  color: #2c2930;
}
.modal-confirmation {
  width: 100%;
  height: 100vh;
  max-width: 400px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.87);
  color: white;
  z-index: 1001;
  top: 0;
}

.content-quantity {
  /* margin-top: 10px; */
  max-width: 126px;
  /* background: #f4f4f4; */
}
.quantity_remove {
  border: 1px #2c2930;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-style: solid none solid solid;
  height: 30px;
  width: 41px;
}
.quantity_value {
  font-size: 1em;
  color: #2c2930;
  border: 1px #2c2930;
  padding-left: 10px;
  padding-right: 10px;
  border-style: solid none solid none;
  height: 30px;
  width: 41px;
}
.quantity_add {
  border: 1px #2c2930;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-style: solid solid solid none;
  height: 30px;
  width: 41px;
}
.icon-quantity {
  color: #2c2930;
  @apply cursor-pointer;
}
.icon-quantity:hover {
  color: #eb7025;
  @apply cursor-pointer;
}
.container-alerta {
  position: absolute;
  bottom: 0px;
  right: -133px;
  width: 130px;
  background-color: rgb(250, 232, 75);
  border: 1px solid rgb(230, 213, 66);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: black;
}
.alerta {
  text-align: center;
  padding: 4px 5px;
  /* text-transform: capitalize; */
}
@media (max-width: 800px) {
  .wrapper-items-form {
    max-width: 100%;
    padding: 20px 0 45px;
  }
}
@media (max-width: 500px) {
  .wrapper-items-form {
    padding: 20px 0 300px;
  }
}
</style>
