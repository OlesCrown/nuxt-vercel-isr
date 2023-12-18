export default defineEventHandler(event => {
  console.log("Hello console  from API OLES2!")
  console.error("Hello error from API OLES2!")
  return "Hello from API OLES2!" 
})