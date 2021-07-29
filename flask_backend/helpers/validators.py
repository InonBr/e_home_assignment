import phonenumbers
from phonenumbers import NumberParseException


def validate_phone_number(phone_number):
    try:
        valid_number = phonenumbers.parse(phone_number)
        is_valid_number = phonenumbers.is_possible_number(valid_number)

        if not phone_number[1:].isdigit() or not is_valid_number:
            return False

        valid_number = f"+{valid_number.country_code}{valid_number.national_number}"

        return valid_number
    except NumberParseException:
        return False
