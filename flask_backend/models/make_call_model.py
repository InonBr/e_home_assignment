from pydantic import BaseModel, validator
from helpers import validate_phone_number


class MakeCall(BaseModel):
    phone_number: str

    # validate that the phone number that was provided is valid
    @validator('phone_number', pre=True, always=True, allow_reuse=True, check_fields=False)
    def phone_num_validation(cls, phone):
        phone = validate_phone_number(phone)

        if phone is False:
            raise ValueError("sorry, phone number is not valid")

        return phone
