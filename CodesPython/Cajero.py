saldo = 1000
retiro= int(input("Ingrese el monto a retirar:"))
if retiro <= saldo:
    saldo -= retiro
    print("Retiro exitoso. Saldo restante:", saldo)
else:
    print("Saldo insuficiente")