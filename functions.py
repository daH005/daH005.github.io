__all__ = (
    'take_before',
    'take_after',
)


def take_before(dictionary: dict, key: str):
    keys, key_index = _keys_and_keys_index(dictionary, key)

    if key_index == 0:
        return dictionary[keys[-1]]

    return dictionary[keys[key_index - 1]]


def take_after(dictionary: dict, key: str):
    keys, key_index = _keys_and_keys_index(dictionary, key)

    if key_index == len(keys) - 1:
        return dictionary[keys[0]]

    return dictionary[keys[key_index + 1]]


def _keys_and_keys_index(dictionary: dict, key: str):
    if key not in dictionary:
        raise KeyError

    keys = list(dictionary.keys())
    key_index = keys.index(key)
    return keys, key_index
