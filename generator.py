from decimal import Decimal, getcontext

def generate_alternating_sequence(generations=100):
    # Set precision slightly higher than target to avoid rounding issues
    getcontext().prec = generations + 2
    
    pi_digits = str(Decimal(1).atan() * 4).replace('.', '')
    e_digits = str(Decimal(1).exp()).replace('.', '')
    
    sequence = []
    # Alternating Three-Generation Inference
    for i in range(generations):
        # Pi provides the "odd" generations, E provides the "even"
        sequence.append(pi_digits[i])
        sequence.append(e_digits[i])
        
    return "".join(sequence)

# Let's generate the first 100 digits of your sequence
print(generate_alternating_sequence(50))

