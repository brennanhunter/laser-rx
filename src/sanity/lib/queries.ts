export const BUSINESS_SETTINGS_QUERY = `*[_type == "businessSettings"][0] {
  businessHours
}`;

export const PROMOTIONS_QUERY = `*[_type == "promotion"] | order(order asc) {
  _id,
  title,
  description,
  bannerText,
  order,
  isActive
}`;
