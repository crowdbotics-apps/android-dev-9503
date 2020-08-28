import axios from "axios"
import { PARENT_ONLY_USERNAME, PARENT_ONLY_PASSWORD } from "react-native-dotenv"
const parentonly = axios.create({
  baseURL: "https://www.connectorsupplier.com/",
  auth: { username: PARENT_ONLY_USERNAME, password: PARENT_ONLY_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const androidAPI = axios.create({
  baseURL: "https://android-dev-9503.botics.co/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_customtext_list() {
  return androidAPI.get(`/api/v1/customtext/`)
}
function api_v1_customtext_read() {
  return androidAPI.get(`/api/v1/customtext/{id}/`)
}
function api_v1_customtext_update(requestBody) {
  return androidAPI.put(`/api/v1/customtext/{id}/`, requestBody)
}
function api_v1_customtext_partial_update(requestBody) {
  return androidAPI.patch(`/api/v1/customtext/{id}/`, requestBody)
}
function api_v1_homepage_list() {
  return androidAPI.get(`/api/v1/homepage/`)
}
function api_v1_homepage_read() {
  return androidAPI.get(`/api/v1/homepage/{id}/`)
}
function api_v1_homepage_update(requestBody) {
  return androidAPI.put(`/api/v1/homepage/{id}/`, requestBody)
}
function api_v1_homepage_partial_update(requestBody) {
  return androidAPI.patch(`/api/v1/homepage/{id}/`, requestBody)
}
function api_v1_login_create() {
  return androidAPI.post(`/api/v1/login/`)
}
function api_v1_signup_create(requestBody) {
  return androidAPI.post(`/api/v1/signup/`, requestBody)
}
function rest_auth_login_create(requestBody) {
  return androidAPI.post(`/rest-auth/login/`, requestBody)
}
function rest_auth_logout_list() {
  return androidAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create() {
  return androidAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(requestBody) {
  return androidAPI.post(`/rest-auth/password/change/`, requestBody)
}
function rest_auth_password_reset_create(requestBody) {
  return androidAPI.post(`/rest-auth/password/reset/`, requestBody)
}
function rest_auth_password_reset_confirm_create(requestBody) {
  return androidAPI.post(`/rest-auth/password/reset/confirm/`, requestBody)
}
function rest_auth_registration_create(requestBody) {
  return androidAPI.post(`/rest-auth/registration/`, requestBody)
}
function rest_auth_registration_verify_email_create(requestBody) {
  return androidAPI.post(`/rest-auth/registration/verify-email/`, requestBody)
}
function rest_auth_user_read() {
  return androidAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(requestBody) {
  return androidAPI.put(`/rest-auth/user/`, requestBody)
}
function rest_auth_user_partial_update(requestBody) {
  return androidAPI.patch(`/rest-auth/user/`, requestBody)
}
export const apiService = {
  api_v1_customtext_list,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  api_v1_homepage_list,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
